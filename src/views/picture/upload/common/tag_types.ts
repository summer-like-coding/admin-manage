export const get_type = (t?: string): string => {
  switch (t) {
    case 'anim':
      return '动漫';
    case 'game':
      return '游戏';
    case 'role':
      return '角色';
    case 'prod':
      return '产品';
    case 'painter':
      return '画师';
    case 'sence':
      return '场景';
    case 'hide':
      return '隐藏';
    default:
      return '';
  }
};
