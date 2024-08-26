<template>
  <div>
    <header class="bg-green-500 text-white">
      <nav class="flex items-center justify-between p-4 max-w-screen-lg mx-auto">
        <div class="space-x-6">
          <a href="/home">Home</a>
          <a href="/about">About</a>
        </div>
      </nav>
    </header>

    <main class=p-4>
      <slot />
    </main>
  </div>
</template>
