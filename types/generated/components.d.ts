import type { Schema, Struct } from '@strapi/strapi';

export interface AnimeAnimeRecommend extends Struct.ComponentSchema {
  collectionName: 'components_anime_anime_recommends';
  info: {
    description: '';
    displayName: 'Recommends_anime';
    icon: 'play';
  };
  attributes: {
    anime: Schema.Attribute.Relation<'oneToOne', 'api::anime.anime'>;
  };
}

export interface AnimeLastRealeaseAnime extends Struct.ComponentSchema {
  collectionName: 'components_anime_last_realease_animes';
  info: {
    description: '';
    displayName: 'Last_realease_anime';
  };
  attributes: {
    anime: Schema.Attribute.Relation<'oneToOne', 'api::anime.anime'>;
    Title: Schema.Attribute.String;
  };
}

export interface ComponentButton extends Struct.ComponentSchema {
  collectionName: 'components_component_buttons';
  info: {
    description: '';
    displayName: 'Button';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'apps';
  };
  attributes: {
    anime: Schema.Attribute.Relation<'oneToOne', 'api::anime.anime'>;
    cta: Schema.Attribute.Component<'component.button', false>;
    description: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 275;
      }>;
    headline: Schema.Attribute.String;
    picture: Schema.Attribute.Media<'images'>;
    subHeadline: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
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
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'anime.anime-recommend': AnimeAnimeRecommend;
      'anime.last-realease-anime': AnimeLastRealeaseAnime;
      'component.button': ComponentButton;
      'sections.hero': SectionsHero;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
