import { ChangeEvent, forwardRef, ReactElement, Ref, useEffect, useRef, useState } from 'react';
import './navbar.scss';
import DIconButton from '@cpns/icon-button/icon-button';
import { TransitionProps } from '@mui/material/transitions';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fade, Slide } from '@mui/material';
import { CustomButtonContained, CustomButtonOutlined } from '@cpns/custom-buttom/button-custom-color';
import { THEME_CHOICE } from '@constants/theme.const';
import { ThemeChar, ThemeColor } from '@models/theme.model';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} >
    <Fade ref={ref} {...props} />
  </Slide>;
});


const CHAR_THEME_LIST = THEME_CHOICE.chars.map(e => ({ ...e, selected: false })) as ThemeChar[];
const COLOR_THEME_LIST = THEME_CHOICE.color.map(e => ({ ...e, selected: false })) as ThemeColor[];

export function Navbar() {
  const navRef = useRef<HTMLDivElement | null>(null);
  const inpRef = useRef<HTMLInputElement | null>(null);

  const [openDialog, setOpenDialog] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [inpFocus, setInpFocus] = useState(false);
  const [chartThemeList, setChartThemeList] = useState(CHAR_THEME_LIST);
  const [colorThemeList, setColorThemeList] = useState(COLOR_THEME_LIST);

  useEffect(() => {
    navRef.current?.setAttribute('_nav_scope', '');
  }, []);

  const inpChange = (e: ChangeEvent) => {
    const value = (e.target as HTMLInputElement).value;
    setSearchText(value);
  };

  const selectOneChar = (theme: ThemeChar, index: number) => {
    console.log(theme);
    setColorThemeList(COLOR_THEME_LIST);
    const v = CHAR_THEME_LIST;
    v[index].selected = !v[index].selected;
    setChartThemeList(v);
  };

  const selectOneColor = (theme: ThemeColor) => {
    console.log(theme);
  };

  return (
    <>
      <div className="d-navbar" ref={navRef}>
        <div className={`search-box fa-center ${inpFocus && searchText ? 's_active' : ''}`}>
          <svg className="sic absolute">
            <use href="#search"/>
          </svg>
          <input
            style={{
              borderBottomLeftRadius: inpFocus && searchText ? 0 : '25px',
              borderBottomRightRadius: inpFocus && searchText ? 0 : '25px',
            }}
            placeholder="Tìm mọi thứ ..."
            ref={inpRef}
            value={searchText}
            className="sip" type="text"
            onChange={inpChange}
            onFocus={() => setInpFocus(true)}
            onBlur={() => setInpFocus(false)}
          />
          {searchText && (
            <DIconButton
              cls="sctr absolute"
              shape="circle"
              ripplecolor="rgba(0, 0, 0, .25)"
              onClick={() => {
                setSearchText('');
                inpRef.current?.focus();
              }}
            >
              <svg className="sct">
                <use href="#search-clear"/>
              </svg>
            </DIconButton>
          )}
          {inpFocus && searchText && <div className="result-box absolute">Result</div>}
        </div>
        <div className="main-actions fa-center">
          <DIconButton onClick={() => setOpenDialog(true)} shape="circle" siz="60px" cls="action-button">
            <img width="34px" src="../../../assets/imgs/theme.svg" alt=""/>
          </DIconButton>
          <DIconButton shape="circle" siz="60px" cls="action-button">
            <svg className="icon-style">
              <use href="#setting"/>
            </svg>
          </DIconButton>
        </div>
      </div>

      <Fade in={openDialog}>
        <Dialog
          className="dialog-main"
          open={openDialog}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => setOpenDialog(false)}
          aria-describedby="alert-dialog-slide-description"
        >
          <h2 className="dialog-header">Lựa chọn giao diện</h2>
          <div className="dialog-max-body my-scrollbar">
            <div style={{ marginRight: '-10px' }}>
              <DialogTitle>Theo màu</DialogTitle>
              <div className="flex flex-wrap color-picker-group">
                {colorThemeList.map(e => <div onClick={() => selectOneColor(e)} className="color-picker" key={e.id} style={{ backgroundColor: e.ref }}/>)}
              </div>
              <DialogTitle>Theo nhân vật</DialogTitle>
              <div className="flex flex-wrap color-picker-group gr-av">
                {chartThemeList.map((e, i) => <div
                  className="avatar-background-picker"
                  key={e.id}
                  onClick={() => selectOneChar(e, i)}
                ><img src={e.avatarRef} alt=""/>
                  <div className="char-name">{e.name} - {String(e.selected)}</div>
                </div>)}

              </div>

            </div>
          </div>
          <div className="fj-end align-items-center" style={{ minHeight: '70px', margin: '0 24px' }}>
            <CustomButtonOutlined className="dialog-end-btn" hovercolor="B0B0B0FF" textcolor="grey" onClick={() => setOpenDialog(false)} text="Hủy"/>
            <CustomButtonContained className="dialog-end-btn" textcolor="var(--btn-save-text-color)" hovercolor="var(--btn-save-hover-color)" bgcolor="#FF149332" onClick={() => setOpenDialog(false)} text="Lưu"/>
          </div>
        </Dialog>
      </Fade>
    </>
  );
}

export default Navbar;
