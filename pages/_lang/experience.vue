<template>
    <div>
        <div class="w-full p-4 title-background shadow-lg">
            <h1 class="text-gray-100 text-center text-3xl">&lt;{{ $t('experience.title') }}/&gt;</h1>
        </div>
        <div class="py-4 px-2">
            <div class="flex flex-wrap -mx-2">
                <div v-for="item in items" v-bind:key="item.id" class="w-full md:w-1/2 lg:w-1/3 px-2 py-2" data-aos="fade">
                    <div class="rounded overflow-hidden shadow-lg mx-2 my-2 px-4 bg-white">
                        <div class="px-8 py-6">
                            <h2 class="font-bold text-xl mb-2 text-left">{{item.title }}</h2>
                    <p class="text-gray-700 text-base text-left">{{item.yearfirst }} - {{item.yearlast }}</p>
                            <p class="text-gray-700 text-base text-left">{{item.company }}</p>
                            <ul class="list-disc">
                                <li>{{item.task1 }}</li>
                                <li>{{item.task2 }}</li>
                                <li>{{item.task3 }}</li>
                            </ul>
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
        {title: this.$t('experience.work1'), yearfirst:'2019', yearlast: this.$t('experience.status'), company:'Virtually Present', task1: this.$t('experience.task1work1'), task2: this.$t('experience.task2work1'),  task3: this.$t('experience.task3work1')},
        {title: this.$t('experience.work2'), yearfirst:'2018', yearlast:'2019', company:'Siglo Global SL',task1: this.$t('experience.task1work2'), task2: this.$t('experience.task2work2'),  task3: this.$t('experience.task3work2')},
        {title: this.$t('experience.work3'), yearfirst:'2018', yearlast:'2019', company:'Kainver', task1: this.$t('experience.task1work3'), task2: this.$t('experience.task2work3'),  task3: this.$t('experience.task3work3')},
        {title: this.$t('experience.work4'), yearfirst:'2018', yearlast:'2018', company:'Domiserver', task1: this.$t('experience.task1work4'), task2: this.$t('experience.task2work4'),  task3: this.$t('experience.task3work4')},
        {title: this.$t('experience.work5'), yearfirst:'2017', yearlast:'2018', company:'Sanofi', task1: this.$t('experience.task1work5'), task2: this.$t('experience.task2work5'),  task3: this.$t('experience.task3work5')},
        ]   
    }
  }
}
</script>

<style>
    .title-background{
        background: #1c1c1c;
    }
    /*.experience:hover{
      border: solid 2px #00C08B;
    }*/
</style>