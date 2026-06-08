const ImageCropperControl = window.createClass({
  getInitialState: function () {
    return {
      cropping: false,
      previewUrl: null,
      selectedFile: null,
    };
  },

  componentWillUnmount: function () {
    if (this.cropper) {
      this.cropper.destroy();
    }
  },

  handleFileSelect: function (e) {
    const file = e.target.files[0];
    if (file) {
      // Just pass the file to the CMS. Cropping is now optional via the "Editar Imagen" button.
      this.props.onChange(file);
    }
  },

  handleEditExisting: function () {
    if (!this.props.value) return;
    let src = this.props.value;
    if (typeof this.props.value === 'object') {
      src = URL.createObjectURL(this.props.value);
    } else if (this.props.getAsset) {
      src = this.props.getAsset(this.props.value).toString();
    }
    
    // Fix relative paths for the preview and cropper
    if (src && !src.startsWith('http') && !src.startsWith('blob:') && !src.startsWith('/')) {
      src = '/' + src;
    }
    
    const previewImg = document.getElementById(`preview-img-${this.props.forID}`);
    if (previewImg && previewImg.src) {
      src = previewImg.src;
    }
    
    let filename = 'edited-image.png';
    if (typeof this.props.value === 'string') {
      filename = this.props.value.split('/').pop();
    }

    this.setState({
      cropping: true,
      previewUrl: src,
      selectedFile: { name: filename }
    }, () => {
      const imageElement = document.getElementById(`cropper-img-${this.props.forID}`);
      if (imageElement) {
        // Fix for CORS issues when editing existing remote/proxied images
        imageElement.crossOrigin = "Anonymous";
        this.cropper = new Cropper(imageElement, {
          viewMode: 1,
          dragMode: 'move',
          autoCropArea: 1,
          restore: false,
          guides: true,
          highlight: false,
          cropBoxMovable: true,
          cropBoxResizable: true,
          toggleDragModeOnDblclick: false,
        });
      }
    });
  },

  handleSaveCrop: function () {
    if (!this.cropper) return;
    
    this.cropper.getCroppedCanvas().toBlob((blob) => {
      if (!blob) return;

      const file = new File([blob], this.state.selectedFile.name || 'cropped-image.png', {
        type: blob.type || 'image/png',
        lastModified: Date.now(),
      });

      // Pass the cropped file back to Decap CMS.
      // Passing a File object directly to onChange makes the CMS handle the media upload automatically.
      this.props.onChange(file);

      this.setState({ cropping: false, previewUrl: null, selectedFile: null });
      if (this.cropper) {
        this.cropper.destroy();
        this.cropper = null;
      }
    }, 'image/png');
  },

  handleCancelCrop: function () {
    this.setState({ cropping: false, previewUrl: null, selectedFile: null });
    if (this.cropper) {
      this.cropper.destroy();
      this.cropper = null;
    }
  },

  handleRemove: function () {
    this.props.onChange('');
  },

  render: function () {
    const { value, classNameWrapper, forID } = this.props;
    const { cropping, previewUrl } = this.state;
    const h = window.h;

    if (cropping) {
      return h('div', { className: classNameWrapper, style: { padding: '20px', border: '1px solid #dfdfe3', borderRadius: '5px' } }, [
        h('div', { style: { maxHeight: '500px', marginBottom: '20px', overflow: 'hidden', backgroundColor: '#f0f0f0' } }, [
          h('img', { 
            id: `cropper-img-${forID}`, 
            src: previewUrl, 
            style: { maxWidth: '100%', display: 'block' } 
          })
        ]),
        h('div', { style: { display: 'flex', gap: '10px' } }, [
          h('button', { 
            type: 'button', 
            onClick: this.handleSaveCrop,
            style: { padding: '8px 16px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }
          }, 'Guardar Recorte'),
          h('button', { 
            type: 'button', 
            onClick: this.handleCancelCrop,
            style: { padding: '8px 16px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }
          }, 'Cancelar')
        ])
      ]);
    }

    let imagePreview = null;
    if (value) {
      // getAsset retrieves the correct public path or blob URL for previews
      let src = value;
      if (typeof value === 'object') {
        src = URL.createObjectURL(value);
      } else if (this.props.getAsset) {
         src = this.props.getAsset(value).toString();
      }
      
      // Fix relative paths for the preview
      if (src && !src.startsWith('http') && !src.startsWith('blob:') && !src.startsWith('/')) {
        src = '/' + src;
      }

      imagePreview = h('div', { style: { marginBottom: '15px' } }, [
        h('img', { 
          id: `preview-img-${this.props.forID}`,
          src: src, 
          style: { maxWidth: '200px', display: 'block', marginBottom: '10px', borderRadius: '4px', border: '1px solid #eee' },
          onError: function(e) {
            if (typeof value === 'string') {
              const fallbackSrc = 'https://raw.githubusercontent.com/MetalSyntax/Portfolio-MetalSyntax/master/assets/' + value;
              if (e.target.src !== fallbackSrc) {
                e.target.src = fallbackSrc;
              }
            }
          }
        }),
        h('button', { 
          type: 'button', 
          onClick: this.handleEditExisting,
          style: { padding: '6px 12px', background: '#f59e0b', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '13px', marginRight: '10px' }
        }, 'Editar Imagen'),
        h('button', { 
          type: 'button', 
          onClick: this.handleRemove,
          style: { padding: '6px 12px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '13px' }
        }, 'Eliminar Imagen')
      ]);
    }

    return h('div', { className: classNameWrapper, style: { padding: '15px', border: '2px dashed #dfdfe3', borderRadius: '5px', backgroundColor: '#fafafa' } }, [
      imagePreview,
      h('div', { style: { display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' } }, [
        h('label', { 
          htmlFor: `file-upload-${forID}`,
          style: { padding: '8px 16px', background: '#10b981', color: 'white', borderRadius: '4px', cursor: 'pointer', display: 'inline-block', fontWeight: 'bold' }
        }, value ? 'Subir Nueva Imagen' : 'Subir Imagen'),
        h('input', {
          id: `file-upload-${forID}`,
          type: 'file',
          accept: 'image/*',
          onChange: this.handleFileSelect,
          style: { display: 'none' }
        }),
        h('button', {
          type: 'button',
          onClick: function() {
            if (this.props.onOpenMediaLibrary) {
              this.props.onOpenMediaLibrary({
                controlID: this.props.forID,
                forImage: true
              });
            }
          }.bind(this),
          style: { padding: '8px 16px', background: '#6366f1', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }
        }, 'Elegir de la Biblioteca de Medios')
      ])
    ]);
  }
});

const ImageCropperPreview = window.createClass({
  render: function () {
    const { value, getAsset } = this.props;
    if (!value) return null;
    let src = value;
    if (typeof value === 'object') {
      src = URL.createObjectURL(value);
    } else if (getAsset) {
      src = getAsset(value).toString();
    }
    
    if (src && !src.startsWith('http') && !src.startsWith('blob:') && !src.startsWith('/')) {
      src = '/' + src;
    }

    return window.h('img', { 
      src: src, 
      style: { maxWidth: '100%', height: 'auto', borderRadius: '8px' },
      onError: function(e) {
        if (typeof value === 'string') {
          const fallbackSrc = 'https://raw.githubusercontent.com/MetalSyntax/Portfolio-MetalSyntax/master/assets/' + value;
          if (e.target.src !== fallbackSrc) {
            e.target.src = fallbackSrc;
          }
        }
      }
    });
  }
});

CMS.registerWidget('image', ImageCropperControl, ImageCropperPreview);
