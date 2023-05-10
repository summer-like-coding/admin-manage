import type { Catalogue } from './interfaces';

export class TreeNode {
  id: string;

  name: string;

  children: TreeNode[];

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
    this.children = [];
  }
}

/**
 * @param catalogues 目录内容
 * @returns 目录树
 */
export function toTreeNode(catalogues: Catalogue[]): TreeNode[] {
  const result: TreeNode[] = [];
  const tree_map = new Map<string, TreeNode>();
  catalogues.forEach(elem => {
    tree_map.set(elem.id, new TreeNode(elem.id, elem.name));
  });
  catalogues.forEach(elem => {
    const node = tree_map.get(elem.id) as TreeNode;
    if (elem.father_id) {
      const father = tree_map.get(elem.father_id) as TreeNode;
      father.children.push(node);
    } else {
      result.push(node);
    }
  });
  return result;
}
