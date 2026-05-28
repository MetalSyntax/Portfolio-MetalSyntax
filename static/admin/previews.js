// Registrar Tailwind CSS (vía CDN precompilado) y tokens de diseño en la vista previa del iframe
CMS.registerPreviewStyle('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');
CMS.registerPreviewStyle(`
  :root {
    --cms-bg: #0a0a0a;
    --cms-surface: #171717;
    --cms-accent: #00C58E;
  }
  body {
    background-color: var(--cms-bg) !important;
    padding: 2rem;
  }
  .bg-ui-bg { background-color: var(--cms-bg) !important; }
  .bg-ui-bg-muted { background-color: var(--cms-surface) !important; }
  .text-nuxt-green { color: var(--cms-accent) !important; }
  .border-nuxt-green { border-color: var(--cms-accent) !important; }
`, { raw: true });

// Helper function to resolve image URLs for preview
function resolvePreviewImage(imageStr, getAsset) {
  if (!imageStr) return null;
  var asset = getAsset(imageStr);
  if (!asset) return null;
  var url = asset.toString();
  if (url.startsWith('blob:') || url.startsWith('http') || url.startsWith('data:')) {
    return url;
  }
  // Decap CMS might return the raw public path (e.g. img/projects/Parity-.jpg)
  // which fails locally because it's relative to /admin/.
  // Since images are in the "assets/" folder in the repository, we load them from GitHub raw:
  var cleanUrl = url.startsWith('/') ? url.substring(1) : url;
  return "https://raw.githubusercontent.com/MetalSyntax/Portfolio-MetalSyntax/master/assets/" + cleanUrl;
}

// --- VISTA PREVIA PARA PROYECTOS ---
var ProjectPreview = createClass({
  render: function() {
    var entry = this.props.entry;
    var image = entry.getIn(['data', 'image']);
    var bgImageUrl = resolvePreviewImage(image, this.props.getAsset);
    
    var title = entry.getIn(['data', 'title']);
    var company = entry.getIn(['data', 'company']);
    var year = entry.getIn(['data', 'year']);
    var description = entry.getIn(['data', 'description_es']);
    
    // Obtener íconos (es un List de Inmutable.js, así que usamos toJS)
    var iconsData = entry.getIn(['data', 'icons']);
    var icons = iconsData ? iconsData.toJS() : [];

    return h('div', { className: 'w-full max-w-sm mx-auto' },
      h('div', { className: 'rounded-xl overflow-hidden shadow-xl mx-auto my-2 bg-ui-bg-muted border border-gray-800 transition-all duration-300 flex flex-col group' },
        
        // Imagen superior
        h('div', { className: 'relative overflow-hidden block bg-gray-900', style: { height: '200px' } },
          bgImageUrl ? h('img', { 
            src: bgImageUrl.toString(), 
            className: 'w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' 
          }) : h('div', { className: 'w-full h-full flex items-center justify-center text-gray-500' }, 'Sin Imagen')
        ),

        // Cuerpo de la tarjeta
        h('div', { className: 'px-4 py-4 flex-grow' },
          h('p', { className: 'text-center text-white text-xl pt-2 font-semibold' }, title || 'Sin Título'),
          h('p', { className: 'text-center text-nuxt-green font-semibold text-sm block opacity-90 mt-1' }, 
            (company || '') + ' - ' + (year || '')
          ),
          h('p', { className: 'text-gray-400 text-base text-center p-2 line-clamp-3' }, description),
          
          // Iteración de Skills/Íconos
          h('div', { className: 'flex flex-wrap justify-center py-2' },
            icons.map(function(icon, index) {
              var iconUrl = resolvePreviewImage(icon.image, this.props.getAsset);
              return h('div', { key: index, className: 'mx-1 mt-2 bg-gray-800 rounded-full p-2', title: icon.title },
                iconUrl ? h('img', { 
                  src: iconUrl.toString(), 
                  className: 'w-6 h-6 object-contain' 
                }) : h('div', { className: 'w-6 h-6 bg-gray-600 rounded-full' })
              );
            }.bind(this))
          )
        )
      )
    );
  }
});

CMS.registerPreviewTemplate("projects", ProjectPreview);

// --- VISTA PREVIA PARA EXPERIENCIA ---
var ExperiencePreview = createClass({
  render: function() {
    var entry = this.props.entry;
    var image = entry.getIn(['data', 'image']);
    var bgImageUrl = resolvePreviewImage(image, this.props.getAsset);
    
    var title = entry.getIn(['data', 'title_es']);
    var company = entry.getIn(['data', 'company']);
    var yearfirst = entry.getIn(['data', 'yearfirst']);
    var yearlast = entry.getIn(['data', 'yearlast_es']);
    var task1 = entry.getIn(['data', 'task1_es']);
    var task2 = entry.getIn(['data', 'task2_es']);
    var task3 = entry.getIn(['data', 'task3_es']);

    return h('div', { className: 'w-full max-w-2xl mx-auto' },
      h('div', { className: 'flex flex-col items-center bg-ui-bg-muted border border-gray-800 rounded-xl shadow-xl md:flex-row my-4' },
        h('div', { className: 'p-4' },
          bgImageUrl ? h('img', { 
            src: bgImageUrl.toString(), 
            className: 'w-48 h-auto object-cover rounded-xl shadow-md border border-gray-700 p-2 bg-white' 
          }) : h('div', { className: 'w-48 h-48 bg-gray-600 rounded-xl flex items-center justify-center text-white' }, 'Logo')
        ),
        h('div', { className: 'flex flex-col justify-between p-4 leading-normal w-full' },
          h('h5', { className: 'mb-1 text-2xl font-bold tracking-tight text-white' }, title || 'Cargo'),
          h('p', { className: 'mb-1 font-semibold text-lg text-nuxt-green' }, company || 'Empresa'),
          h('p', { className: 'mb-2 font-medium text-md text-gray-400' }, (yearfirst || '') + ' - ' + (yearlast || '')),
          h('div', { className: 'w-full h-[1px] bg-gray-700 my-2' }),
          h('ul', { className: 'list-disc text-gray-300 ml-4 font-normal space-y-1' },
            task1 ? h('li', {}, task1) : null,
            task2 ? h('li', {}, task2) : null,
            task3 ? h('li', {}, task3) : null
          )
        )
      )
    );
  }
});

CMS.registerPreviewTemplate("experience", ExperiencePreview);

// --- VISTA PREVIA PARA CERTIFICADOS (ACHIEVEMENTS) ---
var AchievementPreview = createClass({
  render: function() {
    var entry = this.props.entry;
    var image = entry.getIn(['data', 'image']);
    var bgImageUrl = resolvePreviewImage(image, this.props.getAsset);
    
    var title = entry.getIn(['data', 'title']);
    var company = entry.getIn(['data', 'company']);

    return h('div', { className: 'w-full max-w-sm mx-auto' },
      h('div', { className: 'flex items-center shadow-lg overflow-hidden bg-ui-bg-muted rounded-xl mx-auto my-2 border border-gray-800 p-4' },
        h('div', { className: 'flex-shrink-0' },
          bgImageUrl ? h('img', { 
            src: bgImageUrl.toString(), 
            className: 'w-20 h-20 rounded-full border-2 border-gray-700 object-cover bg-white' 
          }) : h('div', { className: 'w-20 h-20 bg-gray-600 rounded-full' })
        ),
        h('div', { className: 'text-sm ml-4' },
          h('p', { className: 'text-white font-bold text-lg' }, title || 'Título del certificado'),
          h('p', { className: 'text-nuxt-green block opacity-90 text-sm font-medium' }, company || 'Institución')
        )
      )
    );
  }
});

CMS.registerPreviewTemplate("achievements", AchievementPreview);

// --- VISTA PREVIA PARA SKILLS ---
var SkillPreview = createClass({
  render: function() {
    var entry = this.props.entry;
    var image = entry.getIn(['data', 'image']);
    var bgImageUrl = resolvePreviewImage(image, this.props.getAsset);
    var title = entry.getIn(['data', 'title']);

    return h('div', { className: 'w-full flex justify-center py-10' },
      h('div', { className: 'relative w-28 h-28 bg-ui-bg-muted rounded-2xl flex flex-col items-center justify-center border border-gray-800 shadow-xl' },
        h('div', { className: 'w-12 h-12 flex items-center justify-center' },
          bgImageUrl ? h('img', { src: bgImageUrl.toString(), className: 'max-h-full max-w-full object-contain' }) : h('div', { className: 'w-full h-full bg-gray-600' })
        ),
        h('p', { className: 'text-xs text-gray-300 font-semibold mt-2 text-center' }, title || 'Skill')
      )
    );
  }
});

CMS.registerPreviewTemplate("skills", SkillPreview);
