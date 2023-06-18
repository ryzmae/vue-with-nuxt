<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 justify-between">
                <ul class="flex gap-4">
                    <li>
                        <NuxtLink to="/" class="font-bold">
                            Home
                        </NuxtLink>

                    </li>
                </ul>
            </nav>
        </header>
    </div>
    <div>
        <slot />
    </div>
</template>

<style scoped>
    .router-link-exact-active {
        color: #12b488;
    }
</style>
