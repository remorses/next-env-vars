import dotenv from 'dotenv'

const withEnv = ({ envFiles = [] } = {}) => (config) => {
    for (let envFile of envFiles) {
        dotenv.config({ path: envFile })
    }
    const env = skipPrefixes(process.env, ['__', 'NODE'])
    return {
        ...config,
        env: {
            ...env,
            ...(config.env || {}),
        },
    }
}

function skipPrefixes(obj, toSkip) {
    return Object.entries(obj).reduce((acc, [k, v]) => {
        if (!toSkip.filter((x) => k.startsWith(x)).length) {
            return { ...acc, [k]: v }
        }
        return acc
    }, {})
}

// export default withEnv

module.exports = withEnv
