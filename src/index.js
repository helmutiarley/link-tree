import { dados as obj } from './dados'

// função para adicionar um listener em todos os items, a fim de adicionar o efeito hide ou visible (opacity) no icone de SHARE

function listenItems () {
    let items = document.getElementsByClassName("item");

    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener("mouseover", function() {
            let shareHidden = this.getElementsByClassName("share-hidden")[0];
            shareHidden.style.opacity = "1";
        });
    
        items[i].addEventListener("mouseout", function() {
            let shareHidden = this.getElementsByClassName("share-hidden")[0];
            shareHidden.style.opacity = "0";
        });
    }
}

// função para printar o conteúdo na página

const printContent = (nome) => {
    const div = document.createElement('div');
    div.classList.add('item');
  
    const createIcon = () => {
      const i = document.createElement('i');
      i.classList.add('fa-solid', 'fa-link');
      return i;
    }
  
    const createShare = () => {
      const i = document.createElement('i');
      i.classList.add('fa-regular', 'fa-share-from-square');
      return i;
    }
  
    const createItemContent = (content) => {
      const span = document.createElement('span');
      span.classList.add('item-content');
      span.textContent = content;
      return span;
    }
  
    const iconSpan = document.createElement('span');
    iconSpan.classList.add('icon');
    iconSpan.appendChild(createIcon());
  
    const shareSpan = document.createElement('span');
    shareSpan.classList.add('share-hidden');
    shareSpan.appendChild(createShare());
  
    div.appendChild(iconSpan);
    div.appendChild(createItemContent(nome));
    div.appendChild(shareSpan);
  
    document.body.appendChild(div);
    listenItems();
  }

for (let item of Object.values(obj)) {
    printContent(item.nome, item.link)
}
