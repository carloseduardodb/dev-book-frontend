<template>
  <div class="max-w-7xl mx-auto py-6 px-4 sm:px-1 lg:px-2 flex flex-row justify-between">
    <h1 class="text-3xl font-bold text-gray-800">
      <slot></slot>
    </h1>
    <div class="flex gap-5">
      <input type="text" name="" id="" placeholder="Pesquise por um usuário" class="bg-gray-200 rounded-md px-2 py-1">
      <h1 class="text-3xl font-bold text-gray-700"><span class="text-blue-500">Dev</span>Book</h1>
    </div>
  </div>
</template>