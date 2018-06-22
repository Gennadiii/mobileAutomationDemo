interface ComponentsListInterface {
  getElementByIndex: (index: number) => any;
}


class ComponentsList implements ComponentsListInterface {

  constructor(private ef, private DesiredComponent, private elements) {
  }

  getElementByIndex(index) {
    return new this.DesiredComponent(this.ef.all.element(this.elements.using, this.elements.value, {index}));
  }

}


export {ComponentsList};
