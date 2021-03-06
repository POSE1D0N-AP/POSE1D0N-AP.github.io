(function() {
  var magicFocus;

  magicFocus = class magicFocus {
    constructor(parent) {
      var i, input, len, ref;
      this.show = this.show.bind(this);
      this.hide = this.hide.bind(this);
      this.parent = parent;
      if (!this.parent) {
        return;
      }
      this.focus = document.createElement('div');
      this.focus.classList.add('magic-focus');
      this.parent.classList.add('has-magic-focus');
      this.parent.appendChild(this.focus);
      ref = this.parent.querySelectorAll('input, textarea, select');
      for (i = 0, len = ref.length; i < len; i++) {
        input = ref[i];
        input.addEventListener('focus', function() {
          return window.magicFocus.show();
        });
        input.addEventListener('blur', function() {
          return window.magicFocus.hide();
        });
      }
    }

    show() {
      var base, base1, el;
      if (!(typeof (base = ['INPUT', 'SELECT', 'TEXTAREA']).includes === "function" ? base.includes((el = document.activeElement).nodeName) : void 0)) {
        return;
      }
      clearTimeout(this.reset);
      if (typeof (base1 = ['checkbox', 'radio']).includes === "function" ? base1.includes(el.type) : void 0) {
        el = document.querySelector(`[for=${el.id}]`);
      }
      this.focus.style.top = `${el.offsetTop || 0}px`;
      this.focus.style.left = `${el.offsetLeft || 0}px`;
      this.focus.style.width = `${el.offsetWidth || 0}px`;
      return this.focus.style.height = `${el.offsetHeight || 0}px`;
    }

    hide() {
      var base, el;
      if (!(typeof (base = ['INPUT', 'SELECT', 'TEXTAREA', 'LABEL']).includes === "function" ? base.includes((el = document.activeElement).nodeName) : void 0)) {
        this.focus.style.width = 0;
      }
      return this.reset = setTimeout(function() {
        return window.magicFocus.focus.removeAttribute('style');
      }, 200);
    }

  };

  // initialize
  window.magicFocus = new magicFocus(document.querySelector('.form'));

  $(function() {
    return $('.select').customSelect();
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFHLENBQUEsUUFBQSxDQUFBLENBQUE7QUFDRCxRQUFBLElBQUEsRUFBQTtJQUFBLElBQUEsR0FBTztJQUNQLFFBQUEsR0FBVztJQUNYLFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWQsQ0FBaUMsV0FBakMsRUFBOEMsU0FBQSxHQUFZLFFBQVosR0FBdUIsVUFBckU7SUFDQSxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFkLENBQWlDLFdBQWpDLEVBQThDLGlFQUFBLEdBQW9FLElBQXBFLEdBQTJFLE1BQXpIO0VBSkMsQ0FBQSxDQUFILENBQUE7O0VBTU0sYUFBTixNQUFBLFdBQUE7SUFFRSxXQUFhLE9BQUEsQ0FBQTtBQUVYLFVBQUEsQ0FBQSxFQUFBLEtBQUEsRUFBQSxHQUFBLEVBQUE7VUFhRixDQUFBLFdBQUEsQ0FBQTtVQWFBLENBQUEsV0FBQSxDQUFBO01BNUJjLElBQUMsQ0FBQTtNQUViLElBQUEsQ0FBYyxJQUFDLENBQUEsTUFBZjtBQUFBLGVBQUE7O01BRUEsSUFBQyxDQUFBLEtBQUQsR0FBUyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QjtNQUNULElBQUMsQ0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQWpCLENBQXFCLGFBQXJCO01BQ0EsSUFBQyxDQUFBLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBbEIsQ0FBc0IsaUJBQXRCO01BQ0EsSUFBQyxDQUFBLE1BQU0sQ0FBQyxXQUFSLENBQW9CLElBQUMsQ0FBQSxLQUFyQjtBQUVBO01BQUEsS0FBQSxxQ0FBQTs7UUFDRSxLQUFLLENBQUMsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0MsUUFBQSxDQUFBLENBQUE7aUJBQzlCLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBbEIsQ0FBQTtRQUQ4QixDQUFoQztRQUVBLEtBQUssQ0FBQyxnQkFBTixDQUF1QixNQUF2QixFQUErQixRQUFBLENBQUEsQ0FBQTtpQkFDN0IsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFsQixDQUFBO1FBRDZCLENBQS9CO01BSEY7SUFUVzs7SUFlYixJQUFNLENBQUEsQ0FBQTtBQUVKLFVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQTtNQUFBLElBQUEsZ0ZBQTJDLENBQUMsU0FBVSxDQUFDLEVBQUEsR0FBSyxRQUFRLENBQUMsYUFBZixDQUE2QixDQUFDLG1CQUFwRjtBQUFBLGVBQUE7O01BRUEsWUFBQSxDQUFhLElBQUMsQ0FBQSxLQUFkO01BRUEsMEVBQXNFLENBQUMsU0FBVSxFQUFFLENBQUMsY0FBcEY7UUFBQSxFQUFBLEdBQUssUUFBUSxDQUFDLGFBQVQsQ0FBdUIsQ0FBQSxLQUFBLENBQUEsQ0FBUSxFQUFFLENBQUMsRUFBWCxDQUFjLENBQWQsQ0FBdkIsRUFBTDs7TUFFQSxJQUFDLENBQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFiLEdBQW1CLENBQUEsQ0FBQSxDQUFHLEVBQUUsQ0FBQyxTQUFILElBQWMsQ0FBakIsQ0FBbUIsRUFBbkI7TUFDbkIsSUFBQyxDQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBYixHQUFvQixDQUFBLENBQUEsQ0FBRyxFQUFFLENBQUMsVUFBSCxJQUFlLENBQWxCLENBQW9CLEVBQXBCO01BQ3BCLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQWIsR0FBcUIsQ0FBQSxDQUFBLENBQUcsRUFBRSxDQUFDLFdBQUgsSUFBZ0IsQ0FBbkIsQ0FBcUIsRUFBckI7YUFDckIsSUFBQyxDQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBYixHQUFzQixDQUFBLENBQUEsQ0FBRyxFQUFFLENBQUMsWUFBSCxJQUFpQixDQUFwQixDQUFzQixFQUF0QjtJQVhsQjs7SUFhTixJQUFNLENBQUEsQ0FBQTtBQUVKLFVBQUEsSUFBQSxFQUFBO01BQUEsSUFBQSx5RkFBb0UsQ0FBQyxTQUFVLENBQUMsRUFBQSxHQUFLLFFBQVEsQ0FBQyxhQUFmLENBQTZCLENBQUMsbUJBQTdHO1FBQUEsSUFBQyxDQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBYixHQUFxQixFQUFyQjs7YUFFQSxJQUFDLENBQUEsS0FBRCxHQUFTLFVBQUEsQ0FBVyxRQUFBLENBQUEsQ0FBQTtlQUNsQixNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxlQUF4QixDQUF3QyxPQUF4QztNQURrQixDQUFYLEVBRVAsR0FGTztJQUpMOztFQTlCUixFQU5BOzs7RUE4Q0EsTUFBTSxDQUFDLFVBQVAsR0FBb0IsSUFBSSxVQUFKLENBQWUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBZjs7RUFFcEIsQ0FBQSxDQUFFLFFBQUEsQ0FBQSxDQUFBO1dBQ0EsQ0FBQSxDQUFFLFNBQUYsQ0FBWSxDQUFDLFlBQWIsQ0FBQTtFQURBLENBQUY7QUFoREEiLCJzb3VyY2VzQ29udGVudCI6WyJkbyAtPlxuICBsb2dvID0gJzxzdmcgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48dGl0bGU+Y29kZXBlbi1sb2dvPC90aXRsZT48cGF0aCBkPVwiTTE2IDMyQzcuMTYzIDMyIDAgMjQuODM3IDAgMTZTNy4xNjMgMCAxNiAwczE2IDcuMTYzIDE2IDE2LTcuMTYzIDE2LTE2IDE2ek03LjEzOSAyMS42NTFsMS4zNS0xLjM1YS4zODcuMzg3IDAgMCAwIDAtLjU0bC0zLjQ5LTMuNDlhLjM4Ny4zODcgMCAwIDAtLjU0IDBsLTEuMzUgMS4zNWEuMzkuMzkgMCAwIDAgMCAuNTRsMy40OSAzLjQ5YS4zOC4zOCAwIDAgMCAuNTQgMHptNi45MjIuMTUzbDIuNTQ0LTIuNTQzYS43MjIuNzIyIDAgMCAwIDAtMS4wMThsLTYuNTgyLTYuNThhLjcyMi43MjIgMCAwIDAtMS4wMTggMGwtMi41NDMgMi41NDRhLjcxOS43MTkgMCAwIDAgMCAxLjAxOGw2LjU4IDYuNTc5Yy4yODEuMjguNzM3LjI4IDEuMDE5IDB6bTE0Ljc3OS01Ljg1bC03Ljc4Ni03Ljc5YS41NTQuNTU0IDAgMCAwLS43ODggMGwtNS4yMzUgNS4yM2EuNTU4LjU1OCAwIDAgMCAwIC43ODlsNy43OSA3Ljc4OWMuMjE2LjIxNi41NjguMjE2Ljc4NSAwbDUuMjM2LTUuMjM2YS41NjYuNTY2IDAgMCAwIDAtLjc4NmwtLjAwMi4wMDN6bS0zLjg5IDIuODA2YS44MTMuODEzIDAgMSAxIDAtMS42MjYuODEzLjgxMyAwIDAgMSAwIDEuNjI2elwiIGZpbGw9XCIjRkZGXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiLz48L3N2Zz4nXG4gIGxvZ29fY3NzID0gJy5tTXtkaXNwbGF5OmJsb2NrO2JvcmRlci1yYWRpdXM6NTAlO2JveC1zaGFkb3c6MCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO3Bvc2l0aW9uOmZpeGVkO2JvdHRvbToxZW07cmlnaHQ6MWVtOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjo1MCUgNTAlO3RyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTstd2Via2l0LXRyYW5zaXRpb246YWxsIDI0MG1zIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246YWxsIDI0MG1zIGVhc2UtaW4tb3V0O3otaW5kZXg6OTk5OTtvcGFjaXR5OjAuNzV9Lm1NIHN2Z3tkaXNwbGF5OmJsb2NrfS5tTTpob3ZlcntvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xMjUpO3RyYW5zZm9ybTpzY2FsZSgxLjEyNSl9J1xuICBkb2N1bWVudC5oZWFkLmluc2VydEFkamFjZW50SFRNTCAnYmVmb3JlZW5kJywgJzxzdHlsZT4nICsgbG9nb19jc3MgKyAnPC9zdHlsZT4nXG4gIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MICdiZWZvcmVlbmQnLCAnPGEgaHJlZj1cImh0dHBzOi8vY29kZXBlbi5pby9taWNhbi9cIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cIm1NXCI+JyArIGxvZ28gKyAnPC9hPidcbiAgcmV0dXJuXG5jbGFzcyBtYWdpY0ZvY3VzXG4gIFxuICBjb25zdHJ1Y3RvcjogKEBwYXJlbnQpIC0+XG4gICAgXG4gICAgcmV0dXJuIHVubGVzcyBAcGFyZW50XG4gICAgICAgIFxuICAgIEBmb2N1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgJ2RpdidcbiAgICBAZm9jdXMuY2xhc3NMaXN0LmFkZCAnbWFnaWMtZm9jdXMnXG4gICAgQHBhcmVudC5jbGFzc0xpc3QuYWRkICdoYXMtbWFnaWMtZm9jdXMnXG4gICAgQHBhcmVudC5hcHBlbmRDaGlsZCBAZm9jdXNcblxuICAgIGZvciBpbnB1dCBpbiBAcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LCB0ZXh0YXJlYSwgc2VsZWN0JykgICAgICBcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIgJ2ZvY3VzJywgLT5cbiAgICAgICAgd2luZG93Lm1hZ2ljRm9jdXMuc2hvdygpXG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyICdibHVyJywgLT5cbiAgICAgICAgd2luZG93Lm1hZ2ljRm9jdXMuaGlkZSgpXG4gICAgXG4gIHNob3c6ID0+XG4gICAgXG4gICAgcmV0dXJuIHVubGVzcyBbJ0lOUFVUJywnU0VMRUNUJywnVEVYVEFSRUEnXS5pbmNsdWRlcz8gKGVsID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkubm9kZU5hbWVcbiAgICBcbiAgICBjbGVhclRpbWVvdXQoQHJlc2V0KVxuICAgICAgICAgICAgICAgICAgIFxuICAgIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltmb3I9I3tlbC5pZH1dXCIpIGlmIFsnY2hlY2tib3gnLCAncmFkaW8nXS5pbmNsdWRlcz8gZWwudHlwZVxuXG4gICAgQGZvY3VzLnN0eWxlLnRvcCA9IFwiI3tlbC5vZmZzZXRUb3B8fDB9cHhcIlxuICAgIEBmb2N1cy5zdHlsZS5sZWZ0ID0gXCIje2VsLm9mZnNldExlZnR8fDB9cHhcIlxuICAgIEBmb2N1cy5zdHlsZS53aWR0aCA9IFwiI3tlbC5vZmZzZXRXaWR0aHx8MH1weFwiXG4gICAgQGZvY3VzLnN0eWxlLmhlaWdodCA9IFwiI3tlbC5vZmZzZXRIZWlnaHR8fDB9cHhcIlxuICAgICAgXG4gIGhpZGU6ID0+XG4gICAgICAgXG4gICAgQGZvY3VzLnN0eWxlLndpZHRoID0gMCB1bmxlc3MgWydJTlBVVCcsJ1NFTEVDVCcsJ1RFWFRBUkVBJywgJ0xBQkVMJ10uaW5jbHVkZXM/IChlbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLm5vZGVOYW1lXG4gICAgICAgIFxuICAgIEByZXNldCA9IHNldFRpbWVvdXQgLT5cbiAgICAgIHdpbmRvdy5tYWdpY0ZvY3VzLmZvY3VzLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKVxuICAgICwgMjAwXG5cbiMgaW5pdGlhbGl6ZVxuICAgIFxud2luZG93Lm1hZ2ljRm9jdXMgPSBuZXcgbWFnaWNGb2N1cyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpXG5cbiQgLT5cbiAgJCgnLnNlbGVjdCcpLmN1c3RvbVNlbGVjdCgpIl19
//# sourceURL=coffeescript