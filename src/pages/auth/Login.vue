<template>
    <div class="full-width row wrap justify-center items-center content-center" style="height: 100vh;">
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
       <q-card bordered class="my-card shadow-5">
          <q-card-section>
              <h5 class="text-center">Ingresar</h5>
          </q-card-section>
          <q-card-section>
            <q-form class="authentication q-gutter-y-md" ref="emailAuthenticationForm" @submit="onSubmit">
              <q-input
                v-model="email"
                outlined
                autocomplete="email"
                color="primary"
                data-cy="email"
                for="email"
                lazy-rules="lazy-rules"
                name="email"
                label="EMAIL"
                type="email"
                :rules="[val => !!val || '*Field is required', val => val.includes('@') && val.includes('.') || '*Please Provide a valid email']"
              />
              <q-input
                v-model="password"
                for="password"
                name="password"
                lazy-rules="lazy-rules"
                outlined
                autocomplete="current-password"
                color="primary"
                data-cy="password"
                label="PASSWORD"
                :rules="[val =&gt; !!val || '*Field is required']"
                :type="isPwd ? 'password' : 'text'"
                @keyup.enter="onSubmit()"
              >
              <template v-slot:append>
                <q-icon class="cursor-pointer" :name="isPwd ? 'visibility_off' : 'visibility'" @click="isPwd = !isPwd" />
              </template>
              </q-input>
              <q-btn
                class="full-width q-mt-md"
                color="primary"
                data-cy="submit"
                type="submit"
                label="Ingresar"
              >
              </q-btn>

              <p class="q-ma-sm text-right">
                <router-link class="text-blue" to="forgotPassword">Forgot Password?</router-link>
              </p>
            </q-form>
          </q-card-section>
      </q-card>
      </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { QSpinnerGears } from 'quasar'
export default {
  name: 'login',
  data () {
    return {
      email: null,
      isPwd: true,
      password: null,
      passwordMatch: null
    }
  },
  methods: {
    ...mapActions('auth', ['createNewUser', 'loginUser']),
    onSubmit () {
      const { email, password } = this
      this.$refs.emailAuthenticationForm.validate()
        .then(async success => {
          if (success) {
            this.$q.loading.show({
              message: 'Authenticating your account...',
              backgroundColor: 'grey',
              spinner: QSpinnerGears,
              customClass: 'loader'
            })
            try {
              await this.loginUser({ email, password })
              this.$router.push({ name: 'home' })
            } catch (err) {
              console.error(err)
              this.$q.notify({
                message: `An error as occured: ${err}`,
                color: 'negative'
              })
            } finally {
              this.$q.loading.hide()
            }
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
