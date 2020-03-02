import router from './index'

export default {
  showApp (path: string) {
    router.replace({ path: path })
  }
}
