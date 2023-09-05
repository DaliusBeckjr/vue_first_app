<template>
    <!-- in this project we are learning about forms and submit info within a form -->
    <form @submit.prevent="handleSubmit">
        <div>
            <label>email:</label>
            <input type="email" required v-model="email">
        </div>
        <div>
            <label>password:</label>
            <input type="password" required v-model="password">
            <div v-if="passwordError" class="error">{{ passwordError }}</div>
        </div>
        <!-- select box example -->
        <div>
            <label for="">Role:</label>
            <select v-model="role">
                <option value="developer">Web Developer</option>
                <option value="designer">Web Designer</option>
            </select>
        </div>

        <div>
            <label >Skills:</label>
            <!-- for mac try to do crtl instead of alt if using firefox -->
            <input type="text" v-model="tempSkill" @keyup.ctrl="addSkill">
            <div v-for="skill in skills" :key="skill" class="pill">
                <span @click="deleteSkill(skill)"> {{ skill }} </span>
            </div>

        </div>
        <!-- checkbox and radio example -->
        <div class="terms">
            <input type="checkbox" required v-model="terms">
            <label for="">Accept terms and conditions</label>
        </div>

        <div class="submit">
            <button>Create an account</button>
        </div>
    </form>
</template>

<script >
// challenge
// when a user clicks on that skill, the skill will delete

export default {
    data(){
        return {
            email: '',
            password: '',
            role: '',
            terms: false,
            tempSkill: '',
            skills: [],
            passwordError: '',
        }
    },
    methods: {
        addSkill(e){
            if (e.key === ',' && this.tempSkill) {
                if (!this.skills.includes(this.tempSkill)) {
                    this.skills.push(this.tempSkill)
                }
                this.tempSkill = ''
            }
        },
        deleteSkill(skill) {
            this.skills = this.skills.filter((item) => {
                return skill !== item
            })
        },
        handleSubmit() {
            console.log('form submitted')
            // validate password
            this.passwordError = this.password.length > 5 ? '': 'Password must be over 6 characters'
            
            if (!this.passwordError) {
                console.log('email: ', this.email)
                console.log('password: ', this.password)
                console.log('role: ', this.role)
                console.log('skills: ', this.skills)
                console.log('terms accepted: ', this.terms)
            }
            }
        }
    }

</script>

<style>
    form {
        max-width: 520px;
        margin: 30px auto;
        background: white;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
    }
    label {
        color: #aaa;
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 0.6rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }
    input, select {
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color: #555;
    }
    input[type="checkbox"] {
        display: inline-block;
        width: 16px;
        margin: 0 10px 0 0 ;
        position: relative;
        top: 2px;
    }
    .pill {
        display: inline-block;
        margin: 20px 10px 0 0;
        padding: 6px 12px;
        background: #eee;
        border-radius: 20px;
        font-size: 12px;
        letter-spacing: 1px;
        font-weight: bold;
        color: #777;
        cursor: pointer;
    }
    button {
        background: #0b6dff;
        border: 0;
        padding: 10px 20px;
        margin-top: 20px;
        color: white;
        border-radius: 20px;
    }
    .submit {
        text-align: center;
    }
    .error {
        color: #ff0062;
        margin-top: 10px;
        font-size: 0.8em;
        font-weight: bold;
    }
</style>