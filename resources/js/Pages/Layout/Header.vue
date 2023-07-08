<template>
    <header class="w-full h-14 sm:bg-blufs-500  mb-4 px-6 flex justify-between items-center">
        <Logo :width="38" :height="31" fill_stroke="#004999"/>
        <ProfilePicture :style="'rounded-full h-8 w-8'"/>
        <slot/>
    </header>
</template>
