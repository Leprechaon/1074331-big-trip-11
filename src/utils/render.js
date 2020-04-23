const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  AFTEREND: `afterend`,
  BEFOREEND: `beforeend`,
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const render = (container, component, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN: container.prepend(component.getElement());
      break;
    case RenderPosition.BEFOREEND: container.append(component.getElement());
      break;
    case RenderPosition.AFTEREND: container.after(component.getElement());
  }
};

const replace = (parent, newElement, oldElement) => {
  parent.replaceChild(newElement, oldElement);
};

export {RenderPosition, createElement, render, replace};
