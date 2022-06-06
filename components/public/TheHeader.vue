<template>
  <header class="mb-10 py-2 border-b-2 border-pink-100">
    <div class="container flex">
      <!-- name -->
      <h1 class="ml-5 text-lg font-medium">
        <a href="#" class="hover:text-pink-600">بازیاتو</a>
      </h1>

      <!-- input -->
      <div class="px-5 w-full border-r">
        <input
          type="text"
          class="border-none w-72 rounded p-0.5 outline-none text-gray-600 block w-full"
          placeholder="جستجو بازی ..."
        />
      </div>

      <!-- buttons -->
      <div>
        <DarkMode />
      </div>
    </div>
  </header>
</template>
