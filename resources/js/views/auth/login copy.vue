<template>
    <div class="auth-fluid-pages pb-0">
        <div class="auth-fluid">
            <!-- Auth fluid left content -->
            <div class="auth-fluid-form-box">
                <div class="align-items-center d-flex h-100">
                    <div class="card-body">
                        <!-- Logo -->
                        <div class="auth-brand text-center text-lg-left">
                            <div class="auth-logo">
                                <router-link to="/" class="logo logo-dark text-center">
                                    <span class="logo-lg">
                                        <img src="assets/images/logo-dark.png" alt="" height="22" />
                                    </span>
                                </router-link>
                                <router-link to="/" class="logo logo-light text-center">
                                    <span class="logo-lg">
                                        <img src="assets/images/logo-light.png" alt="" height="22" />
                                    </span>
                                </router-link>
                            </div>
                        </div>
                        <!-- Form -->
                        <form @submit.prevent="login">
                            <div class="form-group">
                                <label for="emailaddress">Email address</label>
                                <input v-model="email" class="form-control" type="email" id="emailaddress" required
                                    placeholder="Enter your email" />
                            </div>
                            <div class="form-group">
                                <router-link to="auth-recoverpw-2" class="text-muted float-right"><small>Forgot your
                                        password?</small></router-link>
                                <label for="password">Password</label>
                                <div class="input-group input-group-merge">
                                    <input v-model="password" type="password" id="password" class="form-control"
                                        placeholder="Enter your password" />
                                    <div class="input-group-append" data-password="false">
                                        <div class="input-group-text">
                                            <span class="password-eye"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mb-3">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" v-model="rememberMe" class="custom-control-input"
                                        id="checkbox-signin" />
                                    <label class="custom-control-label" for="checkbox-signin">Remember me</label>
                                </div>
                            </div>
                            <div class="form-group mb-0 text-center">
                                <button class="btn btn-primary btn-block" type="submit">Log In </button>
                            </div>
                        </form>
                        <!-- Footer-->
                        <footer class="footer footer-alt">
                            <p class="text-muted">Don't have an account? <router-link to="auth-register-2"
                                    class="text-muted ml-1"><b>Sign Up</b></router-link></p>
                        </footer>
                    </div>
                    <!-- end .card-body -->
                </div>
                <!-- end .align-items-center.d-flex.h-100-->
            </div>
            <!-- end auth-fluid-form-box-->
            <!-- Auth fluid right content -->
            <div class="auth-fluid-right text-center">
                <div class="auth-user-testimonial">
                    <h2 class="mb-3 text-white">I love the color!</h2>
                    <p class="lead"><i class="mdi mdi-format-quote-open"></i> I've been using your theme from the previous
                        developer for our web app, once I knew new version is out, I immediately bought with no hesitation.
                        Great themes, good documentation with lots of customization available and sample app that really fit
                        our need. <i class="mdi mdi-format-quote-close"></i>
                    </p>
                    <h5 class="text-white"> - Fadlisaad (Ubold Admin User) </h5>
                </div>
                <!-- end auth-user-testimonial-->
            </div>
            <!-- end Auth fluid right content -->
        </div>
        <!-- end auth-fluid-->
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            rememberMe: false
        };
    },
    methods: {
        login() {
            // Implement your login logic here
            console.log('Login clicked');
        }
    }
};
</script>

<style>/* Add your custom styles here */</style>
