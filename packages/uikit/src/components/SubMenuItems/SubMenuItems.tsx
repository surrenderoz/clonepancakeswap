import { useIsomorphicLayoutEffect } from "framer-motion";
import debounce from "lodash/debounce";
import React, { useCallback, useRef, useState } from "react";
import { Box } from "../Box";
import { DropdownMenuItemType } from "../DropdownMenu/types";
import { AtomBox } from "../AtomBox";
import MenuItem from "../MenuItem/MenuItem";
import { ChevronLeftIcon, ChevronRightIcon, OpenNewIcon } from "../Svg";
import StyledSubMenuItems, {
  LeftMaskLayer,
  RightMaskLayer,
  StyledSubMenuItemWrapper,
  SubMenuItemWrapper,
} from "./styles";
import { SubMenuItemsProps } from "./types";
import { FlexGap } from "../Layouts";
import NotificationDot from "../NotificationDot/NotificationDot";

const SUBMENU_CHEVRON_CLICK_MOVE_PX = 100;
const SUBMENU_SCROLL_DEVIATION = 3;

const SubMenuItems: React.FC<React.PropsWithChildren<SubMenuItemsProps>> = ({
  items = [],
  activeItem,
  isMobileOnly = false,
  ...props
}) => {
  const scrollLayerRef = useRef<HTMLDivElement>(null);
  const chevronLeftRef = useRef<HTMLDivElement>(null);
  const chevronRightRef = useRef<HTMLDivElement>(null);
  const [rightClassName, setRightClassName] = useState("");
  const [leftClassName, setLeftClassName] = useState("");
  const hasOverflowing = scrollLayerRef.current
    ? scrollLayerRef.current.offsetHeight < scrollLayerRef.current.scrollHeight ||
      scrollLayerRef.current.offsetWidth < scrollLayerRef.current.scrollWidth
    : false;
  const layerController = useCallback(() => {
    if (!scrollLayerRef.current || !chevronLeftRef.current || !chevronRightRef.current) return;
    const scrollLayer = scrollLayerRef.current;
    if (scrollLayer.scrollLeft !== 0) setLeftClassName("show");
    else setLeftClassName("");
    if (scrollLayer.scrollLeft + scrollLayer.offsetWidth < scrollLayer.scrollWidth - SUBMENU_SCROLL_DEVIATION)
      setRightClassName("show");
    else setRightClassName("");
  }, []);

  const hasLabeledItem = items.some((item) => !!item.LabelIcon);

  useIsomorphicLayoutEffect(() => {
    layerController();
  }, [layerController, items]);

  return (
    <AtomBox display={{ xs: "none", sm: "block" }} asChild>
      <SubMenuItemWrapper $isMobileOnly={isMobileOnly} {...props}>
        <AtomBox display={{ xs: "block", md: "none" }} asChild>
          <LeftMaskLayer
            ref={chevronLeftRef}
            className={leftClassName}
            onClick={() => {
              if (!scrollLayerRef.current) return;
              scrollLayerRef.current.scrollLeft -= SUBMENU_CHEVRON_CLICK_MOVE_PX;
            }}
          >
            <ChevronLeftIcon />
          </LeftMaskLayer>
        </AtomBox>
        <AtomBox display={{ xs: "block", md: "none" }} asChild>
          <RightMaskLayer
            ref={chevronRightRef}
            className={rightClassName}
            onClick={() => {
              if (!scrollLayerRef.current || !hasOverflowing) return;
              scrollLayerRef.current.scrollLeft += SUBMENU_CHEVRON_CLICK_MOVE_PX;
            }}
          >
            {hasOverflowing && (
              <NotificationDot show={hasLabeledItem} color="success">
                <ChevronRightIcon width="24px" height="24px" />
              </NotificationDot>
            )}
          </RightMaskLayer>
        </AtomBox>
        <StyledSubMenuItems
          justifyContent={[isMobileOnly ? "flex-end" : "start", null, "center"]}
          pl={["12px", null, "0px"]}
          onScroll={debounce(layerController, 100)}
          ref={scrollLayerRef}
        >
          {items.map(({ label, LabelIcon, href, icon, itemProps, type, disabled, onClick }) => {
            const Icon = icon;
            const isExternalLink = type === DropdownMenuItemType.EXTERNAL_LINK;
            const linkProps = isExternalLink
              ? {
                  as: "a",
                  target: "_blank",
                }
              : {};

            const isActive = href === activeItem;

            return (
              label && (
                <StyledSubMenuItemWrapper key={label} mr="20px">
                  <MenuItem
                    href={href}
                    scrollLayerRef={scrollLayerRef}
                    isActive={isActive}
                    isDisabled={disabled}
                    variant="subMenu"
                    {...itemProps}
                    {...linkProps}
                    onClick={onClick}
                  >
                    <FlexGap gap="10px" alignItems="center">
                      {Icon && <Icon color={isActive ? "secondary" : "textSubtle"} mr="4px" />}
                      {label}
                      {LabelIcon ? <LabelIcon /> : null}
                    </FlexGap>
                    {isExternalLink && (
                      <Box display={["none", null, "flex"]} style={{ alignItems: "center" }} ml="4px">
                        <OpenNewIcon color="textSubtle" />
                      </Box>
                    )}
                  </MenuItem>
                </StyledSubMenuItemWrapper>
              )
            );
          })}
        </StyledSubMenuItems>
      </SubMenuItemWrapper>
    </AtomBox>
  );
};

export default SubMenuItems;
