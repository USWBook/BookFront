declare module "*.jpg" {
    const value: string;
    export default value;
  }
  declare module "*.png" {
    const value: string;
    export default value;
  }
  declare module "*.jpeg" {
    const value: string;
    export default value;
  }
  declare module "*.gif" {
    const value: string;
    export default value;
  }
  declare module "*.svg" {
    const value: string;
    export default value;
  }
  
//API_URL 타입 지정
interface ImportMetaEnv {
  readonly VITE_DOMAIN_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
