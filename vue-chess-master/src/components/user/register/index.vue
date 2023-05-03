<script>
import UserService from '../../../services/user'
import { setUser } from '../../../vuex/actions'
export default {
  template: require('./template.html'),
  data () {
    var _user = {
      age: 26,
      sexo: 'mascul',
      password: '',
      passwordRepit: '',
      firstName: '',
      lastName: '',
      name: '',
      username: ''
    }
    return {
      editPassword: true,
      formValid: false,
      user: UserService.getUser() || _user,
      error: '',
      formValidMsg: {
        password: {
          success: 'pleaseInputYourPassword',
          error: 'pleaseInputYourPassword'
        },
        passwordRepit: {
          success: 'password Repit success',
          error: 'password Repit is error '
        },
        user: {
          success: 'username is success',
          error: 'username must not is empty'
        }
      }
    }
  },
  vuex: {
    actions: {
      setUser
    }
  },
  methods: {
    validPassword () {
      // algoritmo de validacion de passwords
      if (!this.editPassword) {
        return true
      }
      if (this.user.password.length < 5) {
        this.formValidMsg.errorMsgPasswrd = 'error Message Password'
        return false
      }
      return true
    },
    repitPasswordValidate () {
      if (!this.editPassword) {
        return true
      }
      if (this.user.password !== this.user.passwordRepit) {
        return false
      }
      return true
    },
    validUser () {
      if (this.user.username.length < 4 || this.user.username.length > 10) {
        return false
      }
      return true
    },
    registerUser () {
      if (!this.validUser() || !this.repitPasswordValidate() || !this.validPassword()) {
        return
      }
      this.error = 'procesando'
      UserService.signin(this, this.user).then(function (response) {
        console.log(response)
        this.error = 'redireccionando'
        if (this.user._id) {
          window.location.reload()
        } else {
          this.$route.router.go(this.user._id ? 'user/' + this.user.username : '/')
        }
      }, function (response) {
        for (var i in response.data.errors) {
          // mostrando un solo error por el mommento
          this.error = response.data.errors[i].message
        }
      })
    }
  },
  created () {
    this.user.password = ''
  }
}
</script>
