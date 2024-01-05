/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')('./i18n');
const nextConfig = {}

module.exports = withNextIntl(nextConfig)
