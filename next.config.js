/** @type {import('next').NextConfig} */

const nextConfig = {
    env:{
        customKey : 'customKey'
    },
    images:{
        imageSizes:[16, 32, 48, 64, 96, 128, 256, 384]
    }

}

module.exports = nextConfig 