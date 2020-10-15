// 请先安装 rollup-plugin-esbuild rollup-plugin-vue rollup-plugin-scss sass rollup-plugin-terser
// 为了保证版本一致，请复制我的 package.json 到你的项目，并把 name 改成你的库名
import esbuild from 'rollup-plugin-esbuild';
import vue from 'rollup-plugin-vue';
import less from 'rollup-plugin-less';
import {terser} from 'rollup-plugin-terser';

export default {
	input: 'src/components/index.ts',
	output: [
		{
			globals: {
				vue: 'Vue',
			},
			name: 'Gulu',
			file: 'dist/lib/gulu.js',
			format: 'umd',
			plugins: [terser()],
		}, {
			name: 'Gulu',
			file: 'dist/lib/gulu.esm.js',
			format: 'es',
			plugins: [terser()],
		}],
	plugins: [
		less(),
		esbuild({
			include: /\.[jt]s$/,
			minify: process.env.NODE_ENV === 'production',
			target: 'es2015',
		}),
		vue({
			include: /\.vue$/,
		}),
	],
};