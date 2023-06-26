<template>
	<!--	<button class="close-btn" @click="changeShow">{{ showText }}</button>-->
	<button class="mobile-button" @click="changeShow">{{ showText }}</button>
	<div class="chatgpt-guide" v-if="showChatGPTGuide">
		<h1>ChatGPT 使用指南</h1>
		<p>ChatGPT 是一种基于 OpenAI GPT
			模型训练的聊天机器人技术，它可以模拟自然语言的交互过程并回答用户提出的问题或请求。</p>

		<h2>如何使用 ChatGPT？</h2>
		<ol>
			<li>在页面底部的文本编辑器输入内容，开始与 ChatGPT 进行交互。</li>
			<li>输入任何问题或话题，并等待 ChatGPT 回复。</li>
			<li>如果 ChatGPT 没有明确回答您的问题或未能满足您的需求，<b>请尝试更改输入内容或添加更多上下文信息。</b></li>
		</ol>

		<h2>ChatGPT 能做什么？</h2>
		<p>ChatGPT 可以针对各种主题和问题进行交互，包括但不限于以下内容：</p>
		<ul>
			<li>娱乐/休闲：例如音乐、电影、体育等</li>
			<li>学习/教育：例如历史、科学、数学、地理等</li>
			<li>商业/金融：例如股票、投资、营销等</li>
			<li>科技/编程：例如软件开发、算法、数据科学等</li>
		</ul>

		<h2>需要注意的事项</h2>
		<ol>
			<li>ChatGPT 的回答可能不总是准确或完全符合用户意图。因此，建议您仅将 ChatGPT
				作为一种参考，并在必要时进行进一步的研究或咨询。
			</li>
			<li><b>请勿将任何敏感信息或个人身份识别信息发送给 ChatGPT，以保护您的隐私和安全。</b></li>
			<li>如果遇到任何错误或问题，请及时联系项目负责人。</li>
		</ol>
		<h2>下面是一些使用 ChatGPT 的案例：</h2>
		<ol>
			<li><b>对话系统：</b> ChatGPT 可以用于构建智能对话系统，如客服机器人、聊天室和个人助手。用户可以与 ChatGPT
				进行自然语言交互，ChatGPT 能够根据用户的输入理解用户的意图并提供有用的响应。
			</li>
			<li><b>文本生成：</b>ChatGPT 可以用于生成文本，如电子邮件、新闻文章、小说等。可以在 ChatGPT
				上进行文本生成训练，以学习语言和风格，并准确地模仿作者的写作方式。
			</li>
			<li><b>语言翻译：</b>ChatGPT 可以用于自动翻译，例如将一种语言翻译成另一种语言。使用 ChatGPT 进行机器翻译需要大量的训练数据和优秀的预处理技术。
			</li>
			<li><b>摘要生成：</b>ChatGPT 可以用于生成摘要，使文本更加简洁易懂。使用 ChatGPT 进行文本摘要需要大量的训练数据和专业的模型设计知识。
			</li>
			<li><b>情感分析：</b>ChatGPT 可以用于情感分析，例如自动判断文本中的情绪，从而为企业提供市场反馈或产品服务的改进。</li>
		</ol>
		<h2>更具体的使用案例：</h2><i
		style="color:rgb(209,0,17);">(可以在页面左下角的提示词商店中下载提示词，然后在输入框中按下'/')</i>
		<ol>
			<li><b>选定切入角度</b> <br>
				产生 (数字) 个具有说服力和描述性的文章主题想法，主题为「某个主题」<br> ==>
				产生3 个具有说服力和描述性的文章主题想法，主题为「社交媒体如何影响青少年」
			</li>
			<li><b>报告开头</b> <br>
				我现在正在 报告的情境与目的。我的简报主题是 某个主题，请提供 数字 种开头方式，要简单到 目标族群
				能听懂，同时要足够能吸引人，让他们愿意专心听下去<br> ==>
				我现在正在修台大的简报课，其中一项作业是要做一份让小学生能听懂的简报。我的简报主题是机会成本，请提供三种开头方式，要简单到小学生能听懂，同时要足够能吸引人，让他们愿意专心听下去
			</li>
			<li><b>大纲生成</b> <br>
				为一篇题为「某个主题」的 数字 字文章产生大纲。内容包括前言、主段落和结论。请确保包括有关该主题的主要观点和论点。<br>
				==>
				为一篇题为「社交媒体如何影响青少年的心理健康」的1000 字文章产生大纲。内容包括前言、主段落和结论。请确保包括有关该主题的主要观点和论点。
			</li>
			<li><b>写程式</b> <br>
				你现在是一个 程式语言 专家，请帮我用 程式语言 写一个函式，它需要做到 某个功能<br> ==>
				你现在是一个JavaScript 专家，请帮我用JavaScript 写一个函式，它需要做到输入一个一维阵列，把这个一维阵列转换成二维阵列。同时我要能够自由地决定二维阵列中的子阵列长度是多少
			</li>
		</ol>
		<h2>更多使用技巧：<a href="https://www.explainthis.io/zh-hant/chatgpt" target="_blank" style="color: #d10011">ChatGPT
			指令大全ChatGPT 指令大全</a></h2>
	</div>
</template>
<script>


export default {
	name: "chatgpt-guide",
	data() {
		return {
			showChatGPTGuide: true, // 默认显示 ChatGPT 指南
			showText: "隐藏使用指南", // 默认显示 ChatGPT 指南
		};
	},
	methods: {
		changeShow() {
			this.showChatGPTGuide = !this.showChatGPTGuide
			if (this.showChatGPTGuide) {
				this.showText = "隐藏使用指南"
			} else {
				this.showText = "显示使用指南"
			}
		}
	}
};
</script>
<style scoped>
h1 {
	font-size: inherit;
}

h1 {
	font-size: 36px;
}

h2 {
	font-size: inherit;
}

h2 {
	font-size: 26px;
}

.chatgpt-guide {
	background-color: rgba(109, 170, 175, 0.69);
	width: 80vw;
	height: 100vh;
	margin: 0 auto;
	padding: 10px;
	font-family: Arial, sans-serif;
	color: #333;
	overflow: scroll;
	font-size: 18px;
}
/* 小屏幕设备样式 */
@media only screen and (max-width: 600px) {
	.chatgpt-guide {
		width: 2000vw; /* 缩小宽度以适应较小的屏幕 */
		font-size: 12px; /* 减小字体大小，使文本更容易读取 */
	}
	h1,h2{
		margin-top: 17px;
	}
	h1{
		font-size: 20px;
	}
	h2{
		font-size: 16px;
	}
}
h1, h2 {
	margin-top: 40px;
}

h2 {
	margin-bottom: 20px;
}

p, ol, ul {
	margin-bottom: 20px;
	line-height: 1.5;
}

ol, ul {
	margin-left: 20px;
}

.close-btn {
	position: absolute;
	top: 10px;
	right: 10px;
	padding: 10px;
	font-size: 16px;
	background-color: rgba(16, 215, 233, 0.69);
	border: none;
	outline: none;
	cursor: pointer;
	border-radius: 10px;
	width: 200px;
	height: 50px;
}

.mobile-button {
	display: inline-block;
	padding: 0.1em .3em;
	font-weight: bold;
	//margin: 0 auto;
	border-radius: 4px;
	background-color: #d2f9d1;
	color: #000000;
	font-size: 1em;
	text-decoration: none;
	width: 2vw;
}

@media screen and (max-width: 768px) {
	.mobile-button {
		font-size: 0.4em;
		font-weight: bold;
		padding: 0.1em .7em;
		width:10vw;
	}
}

li {
	margin: 7px;
}
</style>
