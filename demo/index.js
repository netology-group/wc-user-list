import {
  UserList,
  withStyles,
  withFilter,
  withSort,
  withGroup
} from '../src'
import css from '../src/styles.scss'

const withGroupConfig = {
  mapping: {
    admin: 'Администраторы',
    lector: 'Лекторы',
    moderator: 'Модераторы',
    user: 'Пользователи'
  }
}

window.customElements.define('user-list', withGroup(withSort(withFilter(withStyles(UserList, css.toString()))), withGroupConfig))
