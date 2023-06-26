import { isNotEmptyString } from '../utils/is'

// 安全认证模块
// 修改：使用逗号分隔多个密钥，任意一个密钥都可以通过认证
const auth = async (req, res, next) => {
  const AUTH_SECRET_KEY_LIST = process.env.AUTH_SECRET_KEY.split(',')
  if (AUTH_SECRET_KEY_LIST.length > 0) {
    try {
      const Authorization = req.header('Authorization').replace('Bearer ', '')
      if (isNotEmptyString(Authorization) && AUTH_SECRET_KEY_LIST.includes(Authorization))
        throw new Error('Error: 无访问权限 | No access rights')
      next()
    }
    catch (error) {
      res.send({ status: 'Unauthorized', message: error.message ?? 'Please authenticate.', data: null })
    }
  }
  else {
    next()
  }
}
// const auth = async (req, res, next) => {
// 	const AUTH_SECRET_KEY = process.env.AUTH_SECRET_KEY
// 	if (isNotEmptyString(AUTH_SECRET_KEY)) {
// 		try {
// 			const Authorization = req.header('Authorization')
// 			if (!Authorization || Authorization.replace('Bearer ', '').trim() !== AUTH_SECRET_KEY.trim())
// 				throw new Error('Error: 无访问权限 | No access rights')
// 			next()
// 		}
// 		catch (error) {
// 			res.send({ status: 'Unauthorized', message: error.message ?? 'Please authenticate.', data: null })
// 		}
// 	}
// 	else {
// 		next()
// 	}
// }

export { auth }
