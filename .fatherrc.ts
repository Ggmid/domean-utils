export default {
    entry: 'src/index.ts',
    cssModules: false,
    esm: { type: "babel" },
    cjs: { type: "babel", lazy: true },
    umd: false,
    lessInBabelMode: false,
    disableTypeCheck: true
}