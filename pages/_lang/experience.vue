<template>
    <div>
        <div class="w-full p-4">
            <h1 class="text-gray-800 text-center text-3xl">&lt;{{ $t('experience.title') }}/&gt;</h1>
        </div>
        <div class="py-4 px-2">
            <div class="flex flex-wrap -mx-2">
                <div v-for="item in items" v-bind:key="item.id" class="w-full md:w-1/2 lg:w-1/3 px-2 py-2" data-aos="fade">
                    <div class="rounded overflow-hidden shadow-lg mx-2 my-2 px-4 bg-white">
                        <div class="px-8 py-6">
                            <h2 class="font-bold text-xl mb-2 text-left">{{item.title }}</h2>
                    <p class="text-gray-700 text-base text-left">{{item.yearfirst }} - {{item.yearlast }}</p>
                            <p class="text-gray-700 text-base text-left">{{item.company }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   head () {
    return { 
    title: this.$t('head.experience'), 
    meta: [
    { hid: 'description', name: 'description', content: this.$t('description.experience')}
    ]
    }
  },
  data(){
     return {
       items: [
        {title: this.$t('experience.work1'), yearfirst:'2019', yearlast: this.$t('experience.status'), company:'Virtually Present'},
        {title: this.$t('experience.work2'), yearfirst:'2018', yearlast:'2019', company:'Siglo Global SL'},
        {title: this.$t('experience.work3'), yearfirst:'2018', yearlast:'2019', company:'Kainver'},
        {title: this.$t('experience.work4'), yearfirst:'2018', yearlast:'2018', company:'Domiserver'},
        {title: this.$t('experience.work5'), yearfirst:'2017', yearlast:'2018', company:'Sanofi'},
        ]   
    }
  }
}
</script>