export interface IPersonConfig {
    id: number;
    uid: string;
    name: string;
    department: string;
    identity: string;
    avatar: string;
    isWin: boolean;
    x: number;
    y: number
    createTime: string;
    updateTime: string;
    prizeName: string[];
    prizeId: string[];
    prizeTime: string[];
}
export interface Separate {
  id: string
  count: number
  isUsedCount: number
}
export interface IPrizeConfig {
  id: number | string
  name: string
  sort: number
  isAll: boolean
  count: number
  isUsedCount: number
  picture: {
    id: string | number
    name: string
    url: string
  }
  separateCount: {
    enable: boolean
    countList: Separate[]
  }
  desc: string
  isShow: boolean
  isUsed: boolean
  frequency: number
}
export interface IMusic {
  id: string
  name: string
  url: string
}

export interface IImage {
  id: string
  name: string
  url: string
}

export interface IPrizeConfig {
  id: string;
  name: string;
  designatedWinner?: string; // 新增：指定中奖者姓名（仅用于特等奖）
}
