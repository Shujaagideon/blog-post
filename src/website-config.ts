export interface WebsiteConfig {
  title: string;
  description: string;
  descriptions: string;
  coverImage?: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  facebook?: string;
  /**
   * full url, no username
   */
  twitter?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * name and id of the mailchimp email field
   */
  mailchimpEmailFieldName?: string;
  /**
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;
}

const config: WebsiteConfig = {
  title: 'Technological Advances',
  description: 'Shujaa, Kenyan based web app developer and tech blogger. See my blog for general insight on computers and where the technology is at the present',
  descriptions: 'Software Developer',
  coverImage: 'img/blog-cover.png',
  logo: 'img/The-Shujaa.png',
  lang: 'en',
  siteUrl: 'https://shujaa.netlify.app',
  facebook: 'https://www.facebook.com',
  twitter: 'https://twitter.com/TheShujaa',
  showSubscribe: true,
  mailchimpAction: 'https://app.us17.list-manage.com/subscribe/post?u=a5deaaa93acf2e9af3df7833d&amp;id=258e6e75d9',
  mailchimpName: 'b_a5deaaa93acf2e9af3df7833d_258e6e75d9',
  mailchimpEmailFieldName: 'EMAIL mce-EMAIL',
  googleSiteVerification: 'GoogleCode',
  footer: 'Tech-ing The Cool Way',
};

export default config;
