import './component'; // <- Right here!
import './preview'; // <- Right here!

Shopware.Service('cmsService').registerCmsBlock({
    name: 'category-hero',
    category: 'text-image',
    label: 'krümelchen Kategorie Hero',
    component: 'sw-cms-block-category-hero',
    previewComponent: 'sw-cms-preview-category-hero',
    defaultConfig: {
        marginBottom: '0px',
        marginTop: '0px',
        marginLeft: '0px',
        marginRight: '0px',
        sizingMode: 'boxed'
    },
    slots: {}
});