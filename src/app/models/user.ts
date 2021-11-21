export interface User {
  name: string
  email: string
  followers: [User]
  following: [User]
  social: string
  description: string
}
