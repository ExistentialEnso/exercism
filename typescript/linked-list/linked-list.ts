class LinkedListItem<TElement> {
  value: TElement | undefined
  previousItem: LinkedListItem<TElement> | undefined
  nextItem: LinkedListItem<TElement> | undefined
}

export class LinkedList<TElement> {
  frontItem: LinkedListItem<TElement> | undefined
  backItem: LinkedListItem<TElement> | undefined

  public push(element: TElement) {
    let newItem = new LinkedListItem<TElement>()
    newItem.value = element
    newItem.previousItem = this.backItem

    if(this.backItem)
      this.backItem.nextItem = newItem

    this.backItem = newItem

    if(!this.frontItem)
      this.frontItem = newItem
  }

  public pop(): TElement | undefined {
    // If the front and back items are the same, we're removing the only item in the list
    if(this.backItem?.value == this.frontItem?.value) {
      const response = this.frontItem?.value

      this.frontItem = undefined
      this.backItem = undefined

      return response
    }

    const oldBackItem = this.backItem

    this.backItem = this.backItem?.previousItem

    return oldBackItem?.value
  }

  public shift(): TElement | undefined {
    // If the front and back items are the same, we're removing the only item in the list
    if(this.backItem?.value == this.frontItem?.value) {
      const response = this.frontItem?.value

      this.frontItem = undefined
      this.backItem = undefined

      return response
    }

    const oldFrontItem = this.frontItem

    this.frontItem = this.frontItem?.nextItem

    return oldFrontItem?.value
  }

  public unshift(element: TElement) {
    let newItem = new LinkedListItem<TElement>()
    newItem.value = element
    newItem.nextItem = this.frontItem

    if(this.frontItem)
      this.frontItem.previousItem = newItem

    this.frontItem = newItem

    if(!this.backItem)
      this.backItem = newItem
  }

  public delete(element: TElement) {
    // If the value to be deleted, the front, and back items are all the same, we're removing the only item in the list
    if(this.backItem?.value == this.frontItem?.value && this.backItem?.value == element) {
      this.frontItem = undefined
      this.backItem = undefined

      return
    }

    if(!this.frontItem)
      return

    let currentItem = this.frontItem

    while(currentItem.value != element && currentItem.nextItem) {
      currentItem = currentItem.nextItem
    }

    if(currentItem.value == element) {
      if(currentItem.previousItem)
        currentItem.previousItem.nextItem = currentItem.nextItem

      if(currentItem.nextItem)
        currentItem.nextItem.previousItem = currentItem.previousItem
    }
  }

  public count(): number {
    let count = 0
    let currentItem = this.frontItem

    while(currentItem) {
      count++
      currentItem = currentItem?.nextItem
    }

    return count
  }
}
