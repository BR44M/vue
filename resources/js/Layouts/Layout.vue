<script setup>
  import { Link,Head } from '@inertiajs/vue3';
</script>

<template>
  <Head>
  <title>CRUD</title>
  <meta head-key="description" name="description" content="This is the default description">
  </Head>
  <div>
    <header class="bg-indigo-500 text-white">
      <nav class="flex items-center justify-between p-4 max-w-screen-lg mx-auto">
        <div class="space-x-6">
          <Link href="/home">Home</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
    </header>

    <main class=p-4>
      <slot />
    </main>
  </div>
</template>
