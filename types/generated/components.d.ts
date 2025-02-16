import type { Schema, Struct } from '@strapi/strapi';

export interface BannerBanner extends Struct.ComponentSchema {
  collectionName: 'components_banner_banners';
  info: {
    description: '';
    displayName: 'Banner';
    icon: 'apps';
  };
  attributes: {
    Background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Desc: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface Banner2Banner2 extends Struct.ComponentSchema {
  collectionName: 'components_banner2_banner2s';
  info: {
    description: '';
    displayName: 'Banner2';
    icon: 'archive';
  };
  attributes: {
    Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required;
    Name2: Schema.Attribute.String;
  };
}

export interface BlogContentContentBlog extends Struct.ComponentSchema {
  collectionName: 'components_blog_content_content_blogs';
  info: {
    displayName: 'ContentBlog';
    icon: 'italic';
  };
  attributes: {
    Name: Schema.Attribute.String;
  };
}

export interface BlogBlog extends Struct.ComponentSchema {
  collectionName: 'components_blog_blogs';
  info: {
    description: '';
    displayName: 'Blog';
    icon: 'apps';
  };
  attributes: {
    article: Schema.Attribute.Relation<'oneToOne', 'api::article.article'>;
    content_types: Schema.Attribute.Relation<
      'oneToMany',
      'api::content-type.content-type'
    >;
    Desc: Schema.Attribute.String;
    Iframe: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

export interface ButtonButton extends Struct.ComponentSchema {
  collectionName: 'components_button_buttons';
  info: {
    description: '';
    displayName: 'Button';
    icon: 'server';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<['white', 'black']>;
    color: Schema.Attribute.Enumeration<['white', 'black']>;
    linkRef: Schema.Attribute.String;
    styleClass: Schema.Attribute.Enumeration<['sm', 'md', 'xl']>;
    Submenu: Schema.Attribute.Component<'item.item', true>;
    Text: Schema.Attribute.String;
  };
}

export interface FilterFilter extends Struct.ComponentSchema {
  collectionName: 'components_filter_filters';
  info: {
    displayName: 'Filter';
    icon: 'filter';
  };
  attributes: {
    Select: Schema.Attribute.Component<'item.item', true>;
    Type: Schema.Attribute.Component<'button.button', true>;
  };
}

export interface HeaderHeader extends Struct.ComponentSchema {
  collectionName: 'components_header_headers';
  info: {
    description: '';
    displayName: 'Header';
    icon: 'server';
  };
  attributes: {
    Logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Menu: Schema.Attribute.Component<'item.item', true>;
  };
}

export interface ImageImage extends Struct.ComponentSchema {
  collectionName: 'components_image_images';
  info: {
    displayName: 'Image';
    icon: 'picture';
  };
  attributes: {
    Desc: Schema.Attribute.String;
    Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface InfoLinkInfoLink extends Struct.ComponentSchema {
  collectionName: 'components_info_link_info_links';
  info: {
    displayName: 'InfoLink';
    icon: 'question';
  };
  attributes: {
    Date: Schema.Attribute.Date;
    Links: Schema.Attribute.Component<'item.item', true>;
  };
}

export interface ItemItem extends Struct.ComponentSchema {
  collectionName: 'components_item_items';
  info: {
    description: '';
    displayName: 'Item';
    icon: 'italic';
  };
  attributes: {
    link: Schema.Attribute.String;
    Name: Schema.Attribute.String;
    Submenu: Schema.Attribute.Component<'name.name', true>;
  };
}

export interface NameName extends Struct.ComponentSchema {
  collectionName: 'components_name_names';
  info: {
    displayName: 'Name';
    icon: 'twitter';
  };
  attributes: {
    Name: Schema.Attribute.String;
  };
}

export interface VideoVideo extends Struct.ComponentSchema {
  collectionName: 'components_video_videos';
  info: {
    description: '';
    displayName: 'Video';
    icon: 'television';
  };
  attributes: {
    Desc: Schema.Attribute.String;
    Link: Schema.Attribute.String;
    Name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'banner.banner': BannerBanner;
      'banner2.banner2': Banner2Banner2;
      'blog-content.content-blog': BlogContentContentBlog;
      'blog.blog': BlogBlog;
      'button.button': ButtonButton;
      'filter.filter': FilterFilter;
      'header.header': HeaderHeader;
      'image.image': ImageImage;
      'info-link.info-link': InfoLinkInfoLink;
      'item.item': ItemItem;
      'name.name': NameName;
      'video.video': VideoVideo;
    }
  }
}
