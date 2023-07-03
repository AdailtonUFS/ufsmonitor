<template>
    <header class="w-full h-14 sm:bg-blue_main-500  mb-4 px-6 flex justify-between items-center">
        <img :src="'../storage/images/ufs.svg'" alt="ufs">
        <img :src="'../storage/images/avatar.jpg'" alt="avatar" class="rounded-full h-8 w-8">
        <slot />
    </header>
</template>
