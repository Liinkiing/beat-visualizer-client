import {action, observable} from 'mobx'

class Store {

  @observable public isLoggedIn: boolean = false

  @action public loggedIn = (): void => {
    this.isLoggedIn = true
  }

  @action public loggedOff = (): void => {
    this.isLoggedIn = false
  }

}

export const AppStore = new Store()
