<script setup lang="ts">
import {NConfigProvider} from 'naive-ui'
import {NaiveProvider} from '@/components/common'
import {useTheme} from '@/hooks/useTheme'
import {useLanguage} from '@/hooks/useLanguage'


const {theme, themeOverrides} = useTheme()
const {language} = useLanguage()


</script>

<template>
	<NConfigProvider
		class="h-full"
		:theme="theme"
		:theme-overrides="themeOverrides"
		:locale="language"
	>
		<!-- 将 ChatGPTGuide 组件作为模态框显示 -->
<!--		<div >-->
<!--			<ChatGPTGuide v-show="showChatGPTGuide" @click="showChatGPTGuide = false"/>-->
<!--		</div>-->
		<NaiveProvider>
			<RouterView/>
		</NaiveProvider>
	</NConfigProvider>
</template>

