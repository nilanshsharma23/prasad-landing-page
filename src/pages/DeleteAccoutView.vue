<script setup>
import Navbar from '@/components/Navbar.vue';
import { createClient } from '@supabase/supabase-js';
import { ref } from 'vue';
import { VueSpinner } from 'vue3-spinners';

let number = ref('')
let otp = ref('')
let uid = ref('')

let loading = ref(false)
let loggedIn = ref(false)
let otpEntered = ref(false)
let accountDeleted = ref(false)

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_ANON_KEY)

async function logIn() {
    if (number == '') {
        alert("Field is empty")
        return
    }

    loading.value = true;

    const { data, error } = await supabase.auth.signInWithOtp({ phone: `+91${number.value}` })

    if (error) {
        console.log(error)
    } else {
        loggedIn.value = true;
    }

    loading.value = false;
}

async function verifyOTP() {
    if (otp == '') {
        alert("Field is empty")
        return
    }

    loading.value = true;

    const { data: { session }, error } = await supabase.auth.verifyOtp({ phone: `+91${number.value}`, token: `${otp.value}`, type: 'sms' })

    if (error) {
        console.log(error)
    } else {
        uid.value = session.user.id
        otpEntered.value = true
        loggedIn.value = true
    }

    loading.value = false;
}

async function deleteAccount() {
    loading.value = true

    const { data: listingUidData, error } = await supabase.from('listings').select('uid').eq('host', uid.value);

    let listingPaths = []

    listingUidData.forEach(listingUid => {
        listingPaths.push(`${uid.value}/${listingUid}.webp`)
    });

    await supabase.storage.from('proofs').remove(listingPaths)

    await supabase.from('listings').delete().eq('host', uid.value);
    await supabase.from('users').delete().eq('user_id', uid.value);
    await supabase.rpc('delete_user');
    await supabase.auth.signOut();

    accountDeleted = true;

    loading.value = false
}

</script>

<template>
    <Navbar />
    <div class="h-32 "></div>
    <div class="p-12 w-full flex flex-col items-center justify-center gap-4">
        <div class="text-6xl text-text-primary font-bold">Delete Account</div>
        <div v-if="!loggedIn" class="text-2xl text-text-primary">In order to delete your account, you have to sign in
            first.</div>
        <div v-if="!loggedIn" class="flex flex-col gap-4">
            <input type="text" inputmode="numeric"
                class="border-2 border-text-primary text-2xl text-text-primary rounded-2xl p-2 pl-4 pr-4"
                placeholder="Enter Phone Number (+91)" v-model="number">
            <div class="text-xl bg-primary text-text-primary p-2 pl-4 pr-4 rounded-2xl hover:bg-accent cursor-pointer flex flex-row justify-center items-center"
                @click="logIn">Log
                In
                <VueSpinner v-if="loading" size="20" color="#FEF3C7" class="ml-4" />
            </div>
        </div>
        <div v-if="loggedIn && !otpEntered" class="flex flex-col gap-4">
            <input type="text" inputmode="numeric"
                class="border-2 border-text-primary text-2xl text-text-primary rounded-2xl p-2 pl-4 pr-4"
                placeholder="Enter OTP" v-model="otp">
            <div class="text-xl bg-primary text-text-primary p-2 pl-4 pr-4 rounded-2xl hover:bg-accent cursor-pointer flex flex-row justify-center items-center"
                @click="verifyOTP">
                Continue
                <VueSpinner v-if="loading" size="20" color="#FEF3C7" class="ml-4" />
            </div>
        </div>
        <div v-if="otpEntered && !accountDeleted"
            class="text-xl bg-primary text-text-primary p-2 pl-4 pr-4 rounded-2xl hover:bg-accent cursor-pointer flex flex-row justify-center items-center"
            @click="deleteAccount">
            Delete Account
            <VueSpinner v-if="loading" size="20" color="#FEF3C7" class="ml-4" />
        </div>
        <div v-if="accountDeleted" class="text-2xl text-text-primary">Your account has been deleted.</div>
    </div>
</template>