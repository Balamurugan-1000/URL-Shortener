	<script >
	import { ref } from 'vue'
	export default {
		data(){
			return {
				isShow: ref(false),
				url: "",
				shortenLink:ref(""),
			}
		
		},

		methods: {
		async saveURL() {
			try {
				const response = await fetch('http://localhost:4000/api/url', {
				method: 'POST',
				body: JSON.stringify({OrginalLink:this.url}),
				headers: { 'Content-Type': 'application/json' }
				}).then(response => response.json())
				.then(data => {
					console.log(data)
					this.shortenLink =  data.shortenLink
				})
		
				} catch (error) {
				console.error('Error fetching shortened URL:', error);

			}
		},
		async saveURL1() {
			try {
				const response = await fetch('http://localhost:4000/api/url1', {
				method: 'POST',
				body: JSON.stringify({OrginalLink:this.url}),
				headers: { 'Content-Type': 'application/json' }
				}).then(response => response.json())
				.then(data => {
					console.log(data)
					this.shortenLink =  data.shortenLink
				})
		
				} catch (error) {
				console.error('Error fetching shortened URL:', error);

			}
		},
		async getShortLink(){

			const response = await fetch('http://localhost:4000/api/url', {
				method: 'GET',
				headers: { 'Content-Type': 'application/json' }
				})

			const data = await response.json()
			console.log(data)
			this.shortenLink = data.shortenLink

		
			}
			}
		
	}
	</script>
<template >
	  <div class="w-screen h-screen text-green-400 bg-black">
		<h1 class="text-[5rem] font-sans italic text-center"> <span class="text-red-500">URL</span> shortener</h1>
		<div class="container outline-green-400 border border-green-400 bg-black h-[50%] w-1/2 p-2 max-w-1/2 mx-auto flex flex-col items-center justify-center gap-[1rem]">
			<form class="flex gap-5"  >
				<input type="text" class="p-2 mx-auto text-lg rounded text-ellipsis max-w-1/3" placeholder="Enter the long Link " v-model="url">
			<button  class="p-2 px-4 text-white bg-green-600 rounded-lg" @click="e => {
				e.preventDefault()
				saveURL()
				getShortLink()
				}">Click</button>
			</form>

			<div   class="w-1/2 h-[3rem] py-3 text-center bg-white rounded-lg text-green-600">
				<a :href="url" target="_blank" class="text-center">{{ `${shortenLink  ? shortenLink : ""}` }}</a>
			</div>
			
		</div>
  </div>
</template>
