  /**
   * 1.监测某个dom节点是否在document中 (摘自vue1 源码)
   * @param {node} dom元素                    
   * return Boolen dom元素是否在document中                         
   *                     
   */

  function inDoc(node) {
      if (!node) return false
      var doc = node.ownerDocument.documentElement
      var parent = node.parentNode
      return doc === node ||
          doc === parent ||
          !!(parent && parent.nodeType === 1 && (doc.contains(parent)))
  }
