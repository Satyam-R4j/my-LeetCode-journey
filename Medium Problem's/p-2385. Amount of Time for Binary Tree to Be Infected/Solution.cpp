
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left),
 * right(right) {}
 * };
 */
class Solution {
public:
    TreeNode* first;
    void find(TreeNode* root, int start) {
        if (root == nullptr)
            return;
        if (root->val == start) {
            first = root;
            return;
        }
        find(root->left, start);
        find(root->right, start);
    }
    void markParent(TreeNode* root,
                    unordered_map<TreeNode*, TreeNode*>& parent) {
        if (root == nullptr)
            return;
        if (root->left)
            parent[root->left] = root;
        if (root->right)
            parent[root->right] = root;
        markParent(root->left, parent);
        markParent(root->right, parent);
    }
    int amountOfTime(TreeNode* root, int start) {
        find(root, start);
        unordered_map<TreeNode*, TreeNode*> parent;
        markParent(root, parent);
        unordered_set<TreeNode*> isInf;
        isInf.insert(first);
        queue<pair<TreeNode*, int>> q;

        q.push({first, 0});
        int maxLevel = 0;
        while (q.size()) {
            pair<TreeNode*, int> p = q.front();
            q.pop();
            int level = p.second;
            maxLevel = max(maxLevel, level);
            TreeNode* temp = p.first;
            if (temp->left) {
                if (isInf.find(temp->left) == isInf.end()) {
                    q.push({temp->left, level + 1});
                    isInf.insert(temp->left);
                }
            }
            if (temp->right) {
                if (isInf.find(temp->right) == isInf.end()) {
                    q.push({temp->right, level + 1});
                    isInf.insert(temp->right);
                }
            }
            if (parent.find(temp) != parent.end()) {
                if (isInf.find(parent[temp]) == isInf.end()) {
                    q.push({parent[temp], level + 1});
                    isInf.insert(parent[temp]);
                }
            }
        }
        return maxLevel;
    }
};