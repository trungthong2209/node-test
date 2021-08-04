import BaseEntity from "../Base/BaseEntity"

export default class User extends BaseEntity<User> {
  email: string;
  password: string;
}