const fs = require('fs');

// 模拟生成每日推荐内容
const recommendations = `# Daily High-Star Recommendations

每日推荐高 Star 项目，涵盖人工智能、机器学习、深度学习及其他领域。

---

## ${new Date().toISOString().split('T')[0]}

1. **[TensorFlow](https://github.com/tensorflow/tensorflow)**
   - Google's open-source platform for machine learning. Over 200,000★.

2. **[PyTorch](https://github.com/pytorch/pytorch)**
   - A deep learning framework by Meta (Facebook). About 100,000★.

3. **[Scikit-learn](https://github.com/scikit-learn/scikit-learn)**
   - Library for machine learning in Python. Nearly 70,000★.

4. **[Hugging Face Transformers](https://github.com/huggingface/transformers)**
   - NLP and multimodal models for AI applications. Over 160,000★.

5. **[LangChain](https://github.com/langchain-ai/langchain)**
   - Framework for building language-model-powered applications. Fast-growing in the community.

---

每日内容由自动脚本生成，方便随时获取高质量开源推荐！`;

// 将内容写入到 daily_recommendations.md 文件
fs.writeFileSync('daily_recommendations.md', recommendations);
console.log('Daily recommendations updated successfully!');