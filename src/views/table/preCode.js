export default {
  codeScript1: `
  <script>
  export default {
    data() {
      return {
        tableData: [
          {
            a: 1,
            b: 2,
            c: 3,
          },
        ],
        labelMap: [
          {
            label: "列名1",
            key: "a",
            cellRender(h, row) {
              return (
                <div>
                  <button>{row.a}</button>
                </div>
              );
            },
          },
          {
            label: "列名2",
            // key: 'b',
            children: [
              {
                label: "列名2 1",
                key: "b",
                cellRender(h, row) {
                  return (
                    <div>
                      <button>{row.b}</button>
                    </div>
                  );
                },
              },
              {
                label: "列名2 2",
                key: "c",
              },
            ],
          },
        ],
      };
    },
  };
  </script>
  `
}