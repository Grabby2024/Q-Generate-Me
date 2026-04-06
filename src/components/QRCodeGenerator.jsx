import { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { Link, Upload, Info, Palette, QrCode, Download, Save } from 'lucide-react';
import './QRCodeGenerator.css';

const QRCodeGenerator = () => {
  const [text, setText] = useState('');
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const [fgColor, setFgColor] = useState('#0050cb');
  const [level, setLevel] = useState('H');
  const [size, setSize] = useState(1024);
  const [logo, setLogo] = useState(null);
  const [logoSize, setLogoSize] = useState(50);
  const [qrDataUrl, setQrDataUrl] = useState('');
  const [shortenUrl, setShortenUrl] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (!text) {
      setQrDataUrl('');
      return;
    }

    const generateQR = async () => {
      try {
        const dataUrl = await QRCode.toDataURL(text, {
          width: size,
          margin: 4,
          errorCorrectionLevel: level,
          color: {
            dark: fgColor,
            light: bgColor
          }
        });

        if (logo) {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          const img = new Image();
          
          img.onload = () => {
            canvas.width = size;
            canvas.height = size;
            
            const qrImg = new Image();
            qrImg.onload = () => {
              ctx.drawImage(qrImg, 0, 0, size, size);
              
              const logoScale = logoSize / 100;
              const logoWidth = size * logoScale;
              const logoHeight = size * logoScale;
              const logoX = (size - logoWidth) / 2;
              const logoY = (size - logoHeight) / 2;
              
              ctx.drawImage(img, logoX, logoY, logoWidth, logoHeight);
              
              setQrDataUrl(canvas.toDataURL('image/png'));
            };
            qrImg.src = dataUrl;
          };
          img.src = logo;
        } else {
          setQrDataUrl(dataUrl);
        }
      } catch (err) {
        console.error('QR Code generation error:', err);
      }
    };

    generateQR();
  }, [text, size, level, fgColor, bgColor, logo, logoSize]);

  const handleDownload = async () => {
    if (!qrDataUrl) return;

    try {
      const link = document.createElement('a');
      link.download = 'qrcode-high-res.png';
      link.href = qrDataUrl;
      link.click();
    } catch (err) {
      console.error('Download error:', err);
    }
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setLogo(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveLogo = () => {
    setLogo(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="app-container">
      {/* Top Navigation */}
      <nav className="top-nav">
        <div className="nav-content">
          <div className="nav-left">
            <span className="nav-logo">Q-Generate-Me</span>
          </div>
        </div>
      </nav>

      {/* Main Workspace */}
      <main className="main-workspace">
        <div className="workspace-container">
          {/* Header */}
          <header className="workspace-header">
            <div className="header-badge">
              <span className="badge-line"></span>
              <span className="badge-text">Generator v2.4</span>
            </div>
            <h1 className="workspace-title">Precision QR Workspace</h1>
            <p className="workspace-description">
              Configure high-resolution, branded QR codes with architectural precision and real-time rendering.
            </p>
          </header>

          {/* Tool Grid */}
          <div className="tool-grid">
            {/* Controls Column */}
            <div className="controls-column">
              {/* URL Input Section */}
              <div className="control-card">
                <div className="card-header">
                  <label className="card-label">Destination URL</label>
                  <div className="toggle-container">
                    <span className="toggle-label">Shorten URL</span>
                    <button 
                      className={`toggle-switch ${shortenUrl ? 'active' : ''}`}
                      onClick={() => setShortenUrl(!shortenUrl)}
                    >
                      <span className="toggle-knob"></span>
                    </button>
                  </div>
                </div>
                <div className="input-wrapper">
                  <input
                    className="url-input"
                    placeholder="https://example.com"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                  <div className="input-icon">
                    <Link size={20} />
                  </div>
                </div>
              </div>

              {/* Color Customization Section */}
              <div className="control-card">
                <label className="card-label mb-6">Color Architecture</label>
                <div className="color-grid">
                  <div className="color-picker-card">
                    <input
                      id="primaryColor"
                      type="color"
                      value={fgColor}
                      onChange={(e) => setFgColor(e.target.value)}
                    />
                    <div className="color-info">
                      <span className="color-label">Primary Dots</span>
                      <span className="color-value">{fgColor}</span>
                    </div>
                  </div>
                  <div className="color-picker-card">
                    <input
                      id="bgColor"
                      type="color"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                    />
                    <div className="color-info">
                      <span className="color-label">Background</span>
                      <span className="color-value">{bgColor}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Appearance Controls */}
              <div className="control-card appearance-card">
                <div className="appearance-grid">
                  {/* Size Slider */}
                  <div className="slider-section">
                    <div className="slider-header">
                      <label className="card-label">Output Dimensions</label>
                      <span className="slider-value">{size} px</span>
                    </div>
                    <input
                      className="size-slider"
                      max="2000"
                      min="200"
                      step="32"
                      type="range"
                      value={size}
                      onChange={(e) => setSize(Number(e.target.value))}
                    />
                    <div className="slider-labels">
                      <span>200px</span>
                      <span>2000px</span>
                    </div>
                  </div>

                  {/* Logo Upload */}
                  <div className="upload-section">
                    <label className="card-label">Branding Overlay</label>
                    {logo ? (
                      <div className="logo-preview-container">
                        <div className="logo-preview">
                          <img src={logo} alt="Logo" />
                          <button onClick={handleRemoveLogo} className="remove-logo">×</button>
                        </div>
                        <div className="logo-size-control">
                          <label className="logo-size-label">Logo Size: {logoSize}%</label>
                          <input
                            className="size-slider"
                            max="80"
                            min="20"
                            step="5"
                            type="range"
                            value={logoSize}
                            onChange={(e) => setLogoSize(Number(e.target.value))}
                          />
                        </div>
                      </div>
                    ) : (
                      <button className="upload-button" onClick={() => fileInputRef.current?.click()}>
                        <Upload size={20} />
                        <span>Upload custom logo</span>
                      </button>
                    )}
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      style={{ display: 'none' }}
                    />
                  </div>
                </div>
              </div>

              {/* Configuration Summary */}
              <div className="config-summary">
                <div className="summary-icon">
                  <Info size={20} />
                </div>
                <div className="summary-content">
                  <p className="summary-title">Output Format</p>
                  <p className="summary-text">Vector SVG (300 DPI) suitable for high-end print.</p>
                </div>
              </div>

              {/* Primary Action */}
              <div className="action-buttons">
                <button className="btn-download" onClick={handleDownload}>
                  <Download size={20} />
                  Download High-Res Assets
                </button>
                <button className="btn-save">
                  <Save size={20} />
                  Save as Template
                </button>
              </div>
            </div>

            {/* Preview Column */}
            <div className="preview-column">
              <div className="preview-card">
                <div className="preview-header">
                  <h2 className="preview-title">Live Preview</h2>
                  <div className="preview-badges">
                    <span className="badge-primary">SVG</span>
                    <span className="badge-secondary">PNG</span>
                  </div>
                </div>

                {/* QR Preview Visual */}
                <div className="qr-preview-visual">
                  {qrDataUrl ? (
                    <img
                      alt="QR Code Preview"
                      className="qr-preview-image"
                      src={qrDataUrl}
                    />
                  ) : (
                    <div className="qr-placeholder">
                      <QrCode size={48} />
                      <p>Enter URL to generate QR code</p>
                    </div>
                  )}
                  <div className="preview-overlay">
                    <span className="overlay-text">UPDATING REAL-TIME</span>
                  </div>
                </div>

                {/* Tech Specs */}
                <div className="tech-specs">
                  <div className="spec-row">
                    <span className="spec-label">ECC Level</span>
                    <span className="spec-value">High (30%)</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Contrast Ratio</span>
                    <span className="spec-value success">21:1 Pass</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Quiet Zone</span>
                    <span className="spec-value">4 Modules</span>
                  </div>
                </div>
              </div>

              {/* Secondary Options Card */}
              <div className="quick-styles-card">
                <div className="quick-styles-header">
                  <Palette size={20} />
                  <span className="quick-styles-title">Quick Styles</span>
                </div>
                <div className="quick-styles-colors">
                  <div 
                    className="style-swatch"
                    style={{ backgroundColor: '#0050cb' }}
                    onClick={() => setFgColor('#0050cb')}
                  ></div>
                  <div 
                    className="style-swatch bordered"
                    style={{ backgroundColor: '#191c1e' }}
                    onClick={() => setFgColor('#191c1e')}
                  ></div>
                  <div 
                    className="style-swatch bordered"
                    style={{ backgroundColor: '#425ca0' }}
                    onClick={() => setFgColor('#425ca0')}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-content">
          <p className="footer-copyright">@2026-Q-Generate-Me Project</p>
        </div>
      </footer>
    </div>
  );
};

export default QRCodeGenerator;
