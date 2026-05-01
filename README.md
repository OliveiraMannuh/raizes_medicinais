# 🌿 Raízes Medicinais

> Um acervo digital para preservar o conhecimento popular e científico sobre plantas medicinais.

## 🔗 Acesse o projeto
**[Ver site ao vivo →](https://oliveiramannuh.github.io/raizes_medicinais)**

---

## ✨ Funcionalidades

- 📋 **Catálogo em cards** com foto, nome popular, nome científico e uso resumido
- 🔍 **Busca em tempo real** por nome, uso ou qualquer palavra-chave
- 🏷️ **Filtro por categorias** (Calmante, Digestivo, Anti-inflamatório, etc.)
- 🪟 **Modal de detalhes** com informações completas, modo de preparo e avisos
- 📱 **Responsivo** — funciona em celular, tablet e desktop
- ⚠️ **Avisos de segurança** em cada planta

---

## ➕ Como adicionar uma nova planta

Abra o arquivo `plants.js` e adicione um novo objeto dentro do array `plants`:

```javascript
{
  name: "Nome popular",
  scientific: "Nome científico",
  tags: ["Categoria1", "Categoria2"],          // categorias para o filtro
  shortUse: "Breve descrição do uso (1 linha).",
  uses: "Descrição completa dos usos medicinais...",
  how: "Como preparar e usar...",
  warning: "⚠️ Contraindicações e cuidados...",  // deixe "" se não houver
  photo: "URL_da_foto_ou_caminho/local/foto.jpg"
}
```

> **Dica para as fotos:** você pode salvar imagens na pasta `/fotos/` e referenciar como `"fotos/camomila.jpg"`.

---

## 📁 Estrutura do projeto

```
raizes_medicinais/
├── index.html    ← Estrutura da página
├── style.css     ← Estilos e tema visual
├── script.js     ← Lógica: busca, filtros, modal
├── plants.js     ← 📝 Banco de dados das plantas (edite aqui!)
├── fotos/        ← (opcional) Pasta para fotos locais
└── README.md     ← Esta documentação
```

---

## ⚠️ Aviso

As informações contidas neste acervo têm **caráter educativo e de preservação cultural**.  
Elas **não substituem** consulta médica, farmacêutica ou de outro profissional de saúde.

---

*Feito com 💚 para preservar o saber das plantas que curam.*
