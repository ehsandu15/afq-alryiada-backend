import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAdvancedHeading extends Struct.ComponentSchema {
  collectionName: 'components_shared_advanced_headings';
  info: {
    displayName: 'advancedHeading';
  };
  attributes: {
    color: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedAdvancedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_advanced_links';
  info: {
    displayName: 'advancedLink';
  };
  attributes: {
    elementId: Schema.Attribute.String;
    href: Schema.Attribute.Text;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedBasicLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_basic_links';
  info: {
    displayName: 'basicLink';
  };
  attributes: {
    href: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.Text;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    robots: Schema.Attribute.Text;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSeoOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_seo_open_graphs';
  info: {
    displayName: 'seo-open-graph';
  };
  attributes: {
    ogDescription: Schema.Attribute.Text;
    ogImage: Schema.Attribute.Media<'images' | 'files'>;
    ogImageAlt: Schema.Attribute.String;
    ogLocale: Schema.Attribute.String;
    ogSiteName: Schema.Attribute.String;
    ogTitle: Schema.Attribute.String;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.Text;
  };
}

export interface SharedSeoStructuredData extends Struct.ComponentSchema {
  collectionName: 'components_shared_seo_structured_data';
  info: {
    displayName: 'seo-structured-data';
  };
  attributes: {
    context: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    name: Schema.Attribute.Text;
    type: Schema.Attribute.String;
    url: Schema.Attribute.Text;
  };
}

export interface SharedSeoTwitter extends Struct.ComponentSchema {
  collectionName: 'components_shared_seo_twitters';
  info: {
    displayName: 'seo-twitter';
  };
  attributes: {
    twitterCard: Schema.Attribute.String;
    twitterCreator: Schema.Attribute.String;
    twitterDescription: Schema.Attribute.Text;
    twitterImage: Schema.Attribute.Media<'images'>;
    twitterImageAlt: Schema.Attribute.String;
    twitterSite: Schema.Attribute.Text;
    twitterTitle: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.advanced-heading': SharedAdvancedHeading;
      'shared.advanced-link': SharedAdvancedLink;
      'shared.basic-link': SharedBasicLink;
      'shared.seo': SharedSeo;
      'shared.seo-open-graph': SharedSeoOpenGraph;
      'shared.seo-structured-data': SharedSeoStructuredData;
      'shared.seo-twitter': SharedSeoTwitter;
    }
  }
}
